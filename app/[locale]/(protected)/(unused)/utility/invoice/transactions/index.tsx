"use client";

import * as React from "react";
import {
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { columns } from "./columns";
import { Input } from "@/components/ui/input";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { data } from "./data";
import TablePagination from "./table-pagination";
import { Button } from "@/components/ui/button";
import { Calendar, Filter, Plus } from "lucide-react";
import { Link } from '@/i18n/routing';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import BasicCalendar from "../../../components/calendar/basic-calendar";
import { Card } from "@/components/ui/card";

const TransactionsTable = () => {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

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
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div className="w-full">
      <div className="flex items-center py-4 px-5">
        <div className="flex-1 text-xl font-medium text-default-900">
          Invoice
        </div>
        <div className="flex-none">
          <div className="flex items-center gap-4 flex-wrap">
            <Input
              placeholder="Search..."
              value={
                (table.getColumn("status")?.getFilterValue() as string) ?? ""
              }
              onChange={(event) =>
                table.getColumn("status")?.setFilterValue(event.target.value)
              }
              className="max-w-sm "
            />
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  size="md"
                  rounded="sm"
                  className="bg-white hover:ring-0 hover:ring-offset-0 dark:bg-default-900 hover:bg-default-50 font-normal text-default-600 border-default-200 border-solid border "
                >
                  <Calendar className="h-4 w-4 " />
                  <span className="px-2">Select Date</span>
                </Button>
              </PopoverTrigger>
              <PopoverContent className="p-0 overflow-hidden bg-transparent shadow-none border-none">
                <Card>
                  <BasicCalendar />
                </Card>
              </PopoverContent>
            </Popover>

            <Button
              size="md"
              rounded="sm"
              className="bg-white hover:ring-0 hover:ring-offset-0 dark:bg-default-900 hover:bg-default-50 font-normal text-default-600 border-default-200 border-solid border"
            >
              <Filter className="h-4 w-4" />
              <span className="px-2">Filter</span>
            </Button>
            <Link
              href="/utility/invoice/add"
              className="hover:ring-offset-[1px] flex gap-2 items-center text-sm bg-default text-default-50 py-2 px-3 rounded-sm hover:ring-default hover:ring-2 duration-200 transition-all"
            >
              <Plus className="h-4 w-4" />
              <span className="px-2">Add Record</span>
            </Link>
          </div>
        </div>
      </div>

      <Table>
        <TableHeader className="bg-default-200 ">
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead className="last:text-start" key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id} className="h-[75px]">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      <TablePagination table={table} />
    </div>
  );
};
export default TransactionsTable;
