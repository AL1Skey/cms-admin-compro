import { ColumnDef } from "@tanstack/react-table";
import {
  Download,
  Eye,
  Trash2,
} from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
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
  method: string;
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
    accessorKey: "order",
    header: "Order",
    cell: ({ row }) => <span>{row.getValue("order")}</span>,
  },
  {
    accessorKey: "customer",
    header: "Billing Name",
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
    accessorKey: "amount",
    header: "Amount",
    cell: ({ row }) => {
      return <span>{row.getValue("amount")}</span>;
    },
  },
  {
    accessorKey: "method",
    header: "Payment Method",
    cell: ({ row }) => {

      return <span> {row.getValue("method")}</span>;

    },
  },
  {
    accessorKey: "status",
    header: "Payment Status",
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
        <div className="flex items-center gap-1">
          <Link
            href="/utility/invoice/preview/1"
            className="flex items-center p-2 border-b text-warning hover:text-warning-foreground bg-warning/40 hover:bg-warning duration-200 transition-all rounded-full"
          >
            <Eye className="w-4 h-4" />
          </Link>
          <Link
            href="#"
            className="flex items-center p-2 border-b text-info hover:text-info-foreground bg-info/40 hover:bg-info duration-200 transition-all rounded-full"
          >
            <Download className="w-4 h-4" />
          </Link>
          <Link
            href="#"
            className="flex items-center p-2 text-destructive bg-destructive/40 duration-200 transition-all hover:bg-destructive/80 hover:text-destructive-foreground rounded-full"
          >
            <Trash2 className="w-4 h-4" />
          </Link>
        </div>
      );
    },
  },
];
