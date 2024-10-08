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
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"


export type OrdersDataProps = {
  user: {
    name: string;
    image: string;
  }
  product: string;
  invoice: string;
  price: string;
  status: "paid" | "due" | "pending" | "cancled" | "shipped";
}

export const columns: ColumnDef<OrdersDataProps>[] = [
  {
    accessorKey: "user",
    header: "User",
    cell: ({ row }) => (
      <div className="flex items-center gap-5">
        <div className="flex-none">
          <div className="w-8 h-8">
            <Avatar>
              <AvatarImage src={row.original.user.image}></AvatarImage>
              <AvatarFallback>SC</AvatarFallback>
            </Avatar>
          </div>
        </div>
        <div className="flex-1 text-start">
          {row.original.user.name}
        </div>
      </div>
    ),
  },
  {
    accessorKey: "invoice",
    header: "Invoice",
    cell: ({ row }) => (
      <span>{row.getValue("invoice")}</span>
    ),
  },
  {
    accessorKey: "price",
    header: "Price",
    cell: ({ row }) => (
      <span>{row.getValue("price")}</span>
    )
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status") as string;
      const statusClass:{[key: string]: string} = {
        "paid": "bg-success/10 text-success",
        "due": "bg-warning/10 text-warning",
        "pending": "bg-primary/10 text-primary",
        "cancled": "bg-destructive/10 text-destructive",
        "shipped": "bg-warning/10 text-warning",
      }
      const className = statusClass[status] || "bg-default/10 text-default";
      return (
        <Badge className={cn("px-3 min-w-[90px] justify-center py-1 rounded-full",className)}>{status}</Badge>
      )
    }
  }
]

const RecentOrderTable = () => {
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

      <div className="flex items-center justify-center gap-2 flex-none py-4">
        <Button
          variant="outline"
          size="icon"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
          className='w-8 h-8 border-transparent hover:bg-transparent'
        >
          <ChevronLeft className='w-5 h-5 text-default-900' />
        </Button>
        {table.getPageOptions().map((page, pageIndex) => (
          <Button
            key={`basic-data-table-${pageIndex}`}
            onClick={() => table.setPageIndex(pageIndex)}
            size="icon"
            className={`w-7 h-7 hover:text-primary-foreground ${table.getState().pagination.pageIndex === pageIndex ? 'bg-default' : 'bg-default-100 text-default'}`}
          >
            {page + 1}
          </Button>
        ))}
        <Button
          variant="outline"
          size="icon"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
          className='w-8 h-8 border-transparent hover:bg-transparent'>
          <ChevronRight className='w-5 h-5 text-default-900' />
        </Button>
      </div>
    </div>
  )
}

export default RecentOrderTable;

