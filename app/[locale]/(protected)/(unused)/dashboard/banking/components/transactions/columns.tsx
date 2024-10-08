"use client"

import {
  ColumnDef,
} from "@tanstack/react-table"
import { Eye, MoreVertical, SquarePen, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"

export type DataProps = {
  id: string | number;
  customer: {
    name: string;
    image: string;
  };
  history: {
    transId: string;
  },
  date: string;
  amount: string;
  status?: "paid" | "due" | "cancel";
  action: React.ReactNode;
}
export const columns: ColumnDef<DataProps>[] = [
  {
    accessorKey: "customer",
    header: "Customer",
    cell: ({ row }) => {
      const user = row.original.customer;
      return (
        <div className="font-medium text-card-foreground/80">
          <div className="flex gap-3 items-center">
            <Avatar
              className="rounded-full w-8 h-8"
            >
              {user?.image ? (
                <AvatarImage src={user.image} />
              ) : (
                <AvatarFallback>AB</AvatarFallback>
              )}
            </Avatar>
            <span className="text-sm text-default-600 whitespace-nowrap">
              {user?.name ?? "Unknown User"}
            </span>
          </div>
        </div>
      )
    }
  },
  {
    accessorKey: "history",
    header: "History",
    cell: ({ row }) => {
      return (
        <div>
          <div className="text-default-600">
            Transfer
          </div>
          <div className="text-default-500 text-xs">
            Trans ID:    {row.original.history.transId}
          </div>
        </div>
      )
    }
  },
  {
    accessorKey: "date",
    header: "Date",
    cell: ({ row }) => {
      return (
        <span>{row.getValue("date")}</span>
      )
    }
  },
  {
    accessorKey: 'status',
    header: 'Amount',
    cell: ({ row }) => {
      const status = (row.getValue<string>('status') || 'paid') as 'paid' | 'due' | 'cancel';
      const classes: { [key in 'paid' | 'due' | 'cancel']: string } = {
        paid: 'text-primary',
        due: 'text-warning',
        cancel: 'text-destructive',
      };
      return <span className={cn(classes[status])}>{row.original.amount}</span>;
    }
  },
  {
    id: "actions",
    accessorKey: "action",
    header: "Actions",
    enableHiding: false,
    cell: ({ row }) => {
      return (
        <div className="flex  justify-end">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                size="icon"
                className="bg-transparent text-default-700 ring-offset-transparent hover:bg-transparent hover:ring-0 hover:ring-transparent"
              >
                <span className="sr-only">Open menu</span>
                <MoreVertical className="h-4 w-4 " />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="p-0" align="end">
              <DropdownMenuItem className="p-2 border-b text-default-700 group focus:bg-default focus:text-primary-foreground rounded-none">
                <Eye className="w-4 h-4 me-1.5" />
                View
              </DropdownMenuItem>
              <DropdownMenuItem className="p-2 border-b text-default-700 group focus:bg-default focus:text-primary-foreground rounded-none">
                <SquarePen className="w-4 h-4 me-1.5" />
                Edit</DropdownMenuItem>
              <DropdownMenuItem className="p-2 border-b text-destructive group bg-destructive/30 focus:bg-destructive focus:text-destructive-foreground rounded-none">
                <Trash2 className="w-4 h-4 me-1.5" />
                Delete</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      )
    }
  }
]