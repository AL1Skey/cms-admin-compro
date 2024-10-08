"use client"

import * as React from "react"
import {
  ColumnDef,
  ColumnFiltersState,
  PaginationState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
import { Button } from "@/components/ui/button"
import { data } from "./data"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ChevronLeft, ChevronRight, TrendingDown, TrendingUp } from "lucide-react"


export type CompanyData = {
  company: string;
  category: string;
  views: number;
  revenue: string;
  sales: number;
  up: boolean;
}

export const columns: ColumnDef<CompanyData>[] = [
  {
    accessorKey: "company",
    header: "Company",
    cell: ({ row }) => (
      <div className="flex items-center gap-5">
        <div className="flex-none">
          <div className="w-8 h-8">
            <Avatar>
              <AvatarImage src={row.getValue("company")}></AvatarImage>
              <AvatarFallback>SC</AvatarFallback>
            </Avatar>
          </div>
        </div>
        <div className="flex-1 text-start">
          <h4 className="text-sm font-medium text-default-600 whitespace-nowrap mb-1">
            Biffco Enterprises Ltd.
          </h4>
          <div className="text-xs font-normal text-default-600 ">
            Biffco@example.com
          </div>
        </div>
      </div>
    ),
  },
  {
    accessorKey: "category",
    header: "Category",
    cell: ({ row }) => (
      <span className="whitespace-nowrap">{row.getValue("category")}</span>
    ),
  },
  {
    accessorKey: "sales",
    header: "Sales",
    cell: ({ row }) => (
      <div className="flex items-center gap-4">
        <span>{row.getValue("sales")}</span>
        {
          row?.original.up ?
            <TrendingUp className="text-success w-4 h-4" />
            :
            <TrendingDown className="text-destructive w-4 h-4" />
        }
      </div>
    )
  },
  {
    accessorKey: "views",
    header: "Views",
    cell: ({ row }) => (
      <span>{row.getValue("views")}</span>
    )
  },
  {
    accessorKey: "revenue",
    header: "Revenue",
    cell: ({ row }) => (
      <span>{row.getValue("revenue")}</span>
    )
  }
]

const CompanyTable = () => {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([])
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = React.useState({})
  const [pagination, setPagination] = React.useState<PaginationState>({
    pageIndex: 0,
    pageSize: 6,
  })

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    onPaginationChange: setPagination,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
      pagination
    },
  })

  return (
    <div className="w-full overflow-x-auto">
      <Table className="overflow-hidden">
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id} className="bg-default-200">
              {headerGroup.headers.map((header) => (
                <TableHead key={header.id}>
                  {header.isPlaceholder ? null : flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
                className="h-[75px]"
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(
                      cell.column.columnDef.cell,
                      cell.getContext()
                    )}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell
                colSpan={columns.length}
                className="h-24 text-center"
              >
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      <div className="flex items-center justify-center py-4 gap-2 flex-none">
        <Button
          variant="outline"
          size="icon"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
          className='w-8 h-8'
        >
          <ChevronLeft className='w-4 h-4' />
        </Button>
        {table.getPageOptions().map((page, pageIndex) => (
          <Button
            key={`basic-data-table-${pageIndex}`}
            onClick={() => table.setPageIndex(pageIndex)}
            size="icon"
            className="w-8 h-8"
            variant={table.getState().pagination.pageIndex === pageIndex ? 'default' : 'outline'}
          >
            {page + 1}
          </Button>

        ))}
        <Button
          variant="outline"
          size="icon"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
          className='w-8 h-8'
        >
          <ChevronRight className='w-4 h-4' />
        </Button>
      </div>
    </div>
  )
}

export default CompanyTable;

