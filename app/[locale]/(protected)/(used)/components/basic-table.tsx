"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Eye, SquarePen, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import Link from "next/link";
import DeleteConfirmationDialog from "@/components/delete-confirmation-dialog";
import { useRouter } from '@/components/navigation';
import { useState } from "react";
const BasicTable: React.FC<{
  columns: any[];
  tableData: any[];
  action(id: string | null): Promise<void>;
}> = ({ columns = [], tableData = [], action }) => {
  const pathname = usePathname();
  const router = useRouter();
  const [deleteModalOpen, setDeleteModalOpen] = useState<boolean>(false);
  const [actId, setActId] = useState<string | null>(null);
  return (
    <>
      <DeleteConfirmationDialog
        open={deleteModalOpen}
        onClose={() => {
          setActId(null);
          setDeleteModalOpen(false);
        }}
        onConfirm={() => {
          action(actId);
          router.refresh();
        }}
        defaultToast={false}
      />
      <Table>
        <TableHeader>
          <TableRow>
            {columns?.map((column, index) => (
              <TableHead key={`basic-table-column-${index}`}>
                {column}
              </TableHead>
            ))}
            <TableHead>action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tableData?.map((row, index1) => (
            <TableRow key={`table-data-${index1}`}>
              {Object.keys(row).map((key, index) => (
                <>
                  {key === "image" && (
                    <TableCell key={`table-data-cell-${index}`}>
                      <img
                        src={row[key]}
                        alt="Image"
                        className="w-[10rem] h-[7rem] p-2"
                      />
                    </TableCell>
                  )}
                  {key === "id" && (
                    <TableCell key={`table-data-cell-${index}`}>
                      {index1 + 1}
                    </TableCell>
                  )}

                  {!["image", "id"].includes(key) && (
                    <TableCell key={`table-data-cell-${index}`}>
                      {row[key]}
                    </TableCell>
                  )}
                </>
              ))}
              <TableCell>
                <div className="flex items-center gap-4">
                  <Link
                    href={pathname + `/${row && row["id"] ? row["id"] : ""}`}
                  >
                    <Button color="secondary">
                      <Eye className="w-4 h-4" /> View
                    </Button>
                  </Link>
                  <Link
                    href={
                      pathname + `/update/${row && row["id"] ? row["id"] : ""}`
                    }
                  >
                    <Button>
                      <SquarePen className="w-3 h-3" /> Edit
                    </Button>
                  </Link>
                  <Button
                    onClick={() => {
                      setActId(row["id"]);
                      setDeleteModalOpen(true);
                    }}
                  >
                    <Trash2 className="w-4 h-4" /> Delete
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default BasicTable;
