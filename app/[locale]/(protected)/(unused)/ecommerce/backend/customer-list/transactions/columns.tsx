import { ColumnDef } from "@tanstack/react-table";
import { SquarePen, Trash2, TriangleAlert } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Link } from '@/i18n/routing';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

export type DataProps = {
  id: string | number;
  phone: string;
  customer: {
    name: string;
    image: string;
  };
  date: string;
  email: string;
  amount: string;
  rating: number;
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
    accessorKey: "customer",
    header: "User Name",
    cell: ({ row }) => {
      const user = row.original.customer;
      return (
        <div className="font-medium text-card-foreground/80">
          <div className="flex gap-3 items-center">
            <span className="text-sm text-default-600 whitespace-nowrap">
              {user?.name ?? "Unknown User"}
            </span>
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "phone",
    header: "Phone",
    cell: ({ row }) => <span>{row.getValue("phone")}</span>,
  },
  {
    accessorKey: "email",
    header: "Email",
    cell: ({ row }) => <span>{row.getValue("email")}</span>,
  },
  {
    accessorKey: "date",
    header: "Create Date",
    cell: ({ row }) => {
      return <span>{row.getValue("date")}</span>;
    },
  },
  {
    accessorKey: "rating",
    header: "Ratings",
    cell: ({ row }) => {
      return (
        <Badge color="success">
          <span>{row.getValue("rating")}</span>
        </Badge>
      );
    },
  },
  {
    accessorKey: "amount",
    header: "Amount",
    cell: ({ row }) => {
      return <span> {row.getValue("amount")}</span>;
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
            className="flex items-center p-2 border-b text-info hover:text-info-foreground bg-info/40 hover:bg-info duration-200 transition-all rounded-full"
          >
            <SquarePen className="w-4 h-4" />
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
