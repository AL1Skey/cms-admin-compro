"use client"
import * as React from "react"
import {
    ColumnDef,
    ColumnFiltersState,
    SortingState,
    VisibilityState,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable
} from "@tanstack/react-table"
import { defaultProjects, type Project } from "../../data";
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Eye, MoreVertical, SquarePen, Trash2 } from 'lucide-react';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Link } from '@/i18n/routing';
import EditProject from "../../edit-project";
import DeleteConfirmationDialog from "@/components/delete-confirmation-dialog";
import { Input } from "@/components/ui/input";

const ListTable = ({ projects }: { projects: Project[] }) => {
    const [sorting, setSorting] = React.useState<SortingState>([])
    const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
        []
    )
    const [columnVisibility, setColumnVisibility] =
        React.useState<VisibilityState>({})
    const [rowSelection, setRowSelection] = React.useState({})
    const [editTaskOpen, setEditTaskOpen] = React.useState<boolean>(false);
    const [deleteProject, setDeleteProject] = React.useState<boolean>(false)

    const columns: ColumnDef<Project>[] = [
        {
            accessorKey: "title",
            header: "Name",
            cell: ({ row }) => {
                return (
                    <div className="flex items-center gap-3">
                        <Avatar className="w-10 h-10 shadow-none border-none bg-transparent hover:bg-transparent">
                            <AvatarImage src={row.original.projectLogo} />
                            <AvatarFallback> DC</AvatarFallback>
                        </Avatar>
                        <div className="font-medium text-sm leading-4 whitespace-nowrap">
                            {row.getValue("title")}
                        </div>
                    </div>
                )
            }
        },
        {
            accessorKey: "startDate",
            header: "Start Date",
            cell: ({ row }) => {
                return (
                    <span className="whitespace-nowrap">{row.getValue("startDate")}</span>
                )
            }
        },
        {
            accessorKey: "endDate",
            header: "End Date",
            cell: ({ row }) => {
                return (
                    <span className="whitespace-nowrap">{row.getValue("endDate")}</span>
                )
            }
        },
        {
            accessorKey: "assignee",
            header: "Assignee",
            cell: ({ row }: { row: { getValue: (key: string) => { image: string }[] } }) => {
                const assignees = row.getValue("assignee");
                return (
                    <div className="flex -space-x-1 rtl:space-x-reverse">
                        <div className="flex -space-x-1 rtl:space-x-reverse">
                            {assignees.map((item, index) => (
                                <Avatar
                                    key={`user-${index}`}
                                    className="h-6 w-6 shadow-none border-none bg-transparent hover:bg-transparent"
                                >
                                    <AvatarImage src={item.image} />
                                    <AvatarFallback>SC</AvatarFallback>
                                </Avatar>
                            ))}
                        </div>
                        <div className="bg-card text-default-900  text-xs ring-2 ring-default-100  rounded-full h-6 w-6 flex flex-col justify-center items-center">
                            +2
                        </div>
                    </div>
                );
            }
        },
        {
            accessorKey: "progress",
            header: "Status",
            cell: ({ row }) => {
                return (
                    <div>
                        <Progress value={row.getValue("progress")} color="primary" size="sm" />
                        <div className=" text-xs text-default-500  font-medium mt-3 whitespace-nowrap">
                            12/15 Task Completed
                        </div>
                    </div>
                )
            }
        },
        {
            id: "actions",
            accessorKey: "action",
            header: "Action",
            enableHiding: false,
            cell: ({ row }) => {
                return (
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button
                                size="icon"
                                className="flex-none ring-offset-transparent bg-transparent hover:bg-transparent hover:ring-0 hover:ring-transparent w-6"
                            >
                                <MoreVertical className="h-4 w-4 text-default-700" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="p-0 overflow-hidden" align="end" >
                            <DropdownMenuItem
                                className="py-2 border-b border-default-200 text-default-600 focus:bg-default focus:text-default-foreground rounded-none cursor-pointer"
                                asChild
                            >
                                <Link href={`/app/projects/${defaultProjects[0].id}`}>
                                    <Eye className="w-3.5 h-3.5 me-1" />
                                    View
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem
                                className="py-2 border-b border-default-200 text-default-600 focus:bg-default focus:text-default-foreground rounded-none cursor-pointer"
                                onClick={() => setEditTaskOpen(true)}
                            >
                                <SquarePen className="w-3.5 h-3.5 me-1" />
                                Edit
                            </DropdownMenuItem>
                            <DropdownMenuItem
                                className="py-2  bg-destructive/10 text-destructive focus:bg-destructive focus:text-destructive-foreground rounded-none cursor-pointer"
                                onClick={() => setDeleteProject(true)}
                            >
                                <Trash2 className="w-3.5 h-3.5  me-1" />
                                Delete
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                )
            }
        }
    ]
    const table = useReactTable({
        data: projects,
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
            rowSelection
        }
    })

    return (
        <>
            <EditProject
                open={editTaskOpen}
                setOpen={setEditTaskOpen}
            />
            <DeleteConfirmationDialog
                open={deleteProject}
                onClose={() => setDeleteProject(false)}
            />
            <Card>
                <CardHeader>
                    <CardTitle>Project List</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                    <Table>
                        <TableHeader className="px-3 bg-default-100">
                            {table.getHeaderGroups().map((headerGroup) => (
                                <TableRow key={headerGroup.id}>
                                    {headerGroup.headers.map((header) => {
                                        return (
                                            <TableHead key={header.id}>
                                                {header.isPlaceholder
                                                    ? null
                                                    : flexRender(
                                                        header.column.columnDef.header,
                                                        header.getContext()
                                                    )}
                                            </TableHead>
                                        )
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
                                        className="even:bg-default-100 px-6 h-20" >
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
                    <div className="flex items-center justify-end py-4 px-10">

                        <div className="flex-1 flex items-center gap-3">
                            <div className=" flex gap-2 items-center">
                                <div className="text-sm font-medium text-default-60">Go  </div>
                                <Input
                                    type="number"
                                    className="w-16 px-2"
                                    defaultValue={table.getState().pagination.pageIndex + 1}
                                    onChange={(e) => {
                                        const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0;
                                        table.setPageIndex(pageNumber);
                                    }}
                                />
                            </div>
                            <div className="text-sm font-medium text-default-600">
                                Page{" "}  {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
                            </div>
                        </div>
                        <div className="flex items-center gap-2 flex-none">
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
                                    className={`w-8 h-8 ${table.getState().pagination.pageIndex === pageIndex ? 'bg-default' : 'bg-default-300 text-default'}`}
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
                </CardContent>
            </Card>
        </>
    )
}
export default ListTable;