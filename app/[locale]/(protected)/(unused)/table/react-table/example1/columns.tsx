"use client"

import {
  ColumnDef,
} from "@tanstack/react-table"
import { Eye, MoreVertical, SquarePen, Trash2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils";
export type DataProps = {
  id:string | number;
  order: number;
  customer: {
    name: string;
    image: string;
  };
  date: string;
  quantity: number;
  amount: string;
  status: "paid" | "due" | "canceled";
  action: React.ReactNode;
}
export const columns: ColumnDef<DataProps>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <div className="xl:w-16">
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
        />
      </div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "id",
    header: "id",
    cell: ({ row }) => <span>{row.getValue("id")}</span>,
  },
  {
    accessorKey: "order",
    header: "Order",
    cell: ({ row }) => <span>{row.getValue("order")}</span>,
  },
  {
    accessorKey: "customer",
    header: "Customer",
    cell: ({ row }) => {
      const user = row.original.customer;
      return (
        <div className="font-medium text-card-foreground/80">
          <div className="flex gap-3 items-center">
            <Avatar
              className="rounded-full w-8 h-8 bg-transparent hover:bg-transparent shadow-none border-none"
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
    accessorKey: "date",
    header: "Date",
    cell: ({ row }) => {
      return (
        <span>{row.getValue("date")}</span>
      )
    }
  },
  {
    accessorKey: "quantity",
    header: "Quantity",
    cell: ({ row }) => {
      return (
        <span>{row.getValue("quantity")}</span>
      )
    }
  },
  {
    accessorKey: "amount",
    header: "Amount",
    cell: ({ row }) => {
      return (
        <span>{row.getValue("amount")}</span>
      )
    }
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const statusColors: Record<string, string> = {
        paid: "bg-success/20 text-success",
        due: "bg-warning/20 text-warning",
        canceled: "bg-destructive/20 text-destructive"
      };
      const status = row.getValue<string>("status");
      const statusStyles = statusColors[status] || "default";
      return (
        <Badge 
        className={cn("rounded-full px-5",statusStyles)}
        >{status} </Badge>
      );
    }
  },
  {
    id: "actions",
    accessorKey: "action",
    header: "Actions",
    enableHiding: false,
    cell: ({ row }) => {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              size="icon"
              className="bg-transparent ring-offset-transparent hover:bg-transparent hover:ring-0 hover:ring-transparent"
            >
              <span className="sr-only">Open menu</span>
              <MoreVertical className="h-4 w-4 text-default-800" />
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
            <DropdownMenuItem className="p-2 border-b text-destructive bg-destructive/30  focus:bg-destructive focus:text-destructive-foreground rounded-none">
              <Trash2 className="w-4 h-4 me-1.5" />Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    }
  }
]