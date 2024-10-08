

import { ColumnDef } from "@tanstack/react-table";
import { Eye, MoreVertical, SendHorizontal, SquarePen, Trash2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from '@/i18n/routing';

export type DataProps = {
  id: string | number;
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
};
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
        className="bg-default-100"
      />
    ),
    cell: ({ row }) => (
      <div className="xl:w-16">
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
          className="bg-default-100"
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
            <Avatar className="rounded-full w-8 h-8">
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
      );
    },
  },
  {
    accessorKey: "date",
    header: "Date",
    cell: ({ row }) => {
      return <span>{row.getValue("date")}</span>;
    },
  },
  {
    accessorKey: "quantity",
    header: "Quantity",
    cell: ({ row }) => {
      return <span>{row.getValue("quantity")}</span>;
    },
  },
  {
    accessorKey: "amount",
    header: "Amount",
    cell: ({ row }) => {
      return <span>{row.getValue("amount")}</span>;
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const statusColors: Record<string, string> = {
        paid: "bg-success/20 text-success",
        due: "bg-warning/20 text-warning",
        canceled: "bg-destructive/20 text-destructive",
      };
      const status = row.getValue<string>("status");
      const statusStyles = statusColors[status] || "default";
      return (
        <Badge className={cn("rounded-full px-5", statusStyles)}>
          {status}{" "}
        </Badge>
      );
    },
  },
  {
    id: "actions",
    accessorKey: "action",
    header: "Actions",
    enableHiding: false,
    cell: ({ row }) => {
      return (
        <div className="flex justify-start">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                size="icon"
                className="bg-transparent hover:bg-transparent hover:ring-0 hover:ring-transparent"
              >
                <span className="sr-only">Open menu</span>
                <MoreVertical className="h-4 w-4 text-default-800" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="p-0" align="end">
              <Link
                href="#"
                className="flex items-center p-2 border-b text-default-700 hover:bg-default duration-200 transition-all hover:text-primary-foreground rounded-none"
              >
                <SendHorizontal className="w-4 h-4 me-1.5" />
                Sent
              </Link>
              <Link
                href="/utility/invoice/preview/1"
                className="flex items-center p-2 border-b text-default-700 hover:bg-default duration-200 transition-all hover:text-primary-foreground rounded-none"
              >
                <Eye className="w-4 h-4 me-1.5" />
                View
              </Link>
              <Link
                href="/utility/invoice/edit/1"
                className="flex items-center p-2 border-b text-default-700 hover:bg-default duration-200 transition-all hover:text-primary-foreground rounded-none"
              >
                <SquarePen className="w-4 h-4 me-1.5" />
                Edit
              </Link>
              <Link
                href="#"
                className="flex items-center p-2 text-destructive bg-destructive/40 duration-200 transition-all hover:bg-destructive/80 hover:text-destructive-foreground rounded-none"
              >
                <Trash2 className="w-4 h-4 me-1.5" />
                Delete
              </Link>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      );
    },
  },
];
