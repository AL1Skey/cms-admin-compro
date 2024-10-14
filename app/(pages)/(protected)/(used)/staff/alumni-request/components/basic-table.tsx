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
import { useRouter } from "@/components/navigation";
import { useState } from "react";
import { acceptRequest, rejectRequest } from "../action/action";
const BasicTable: React.FC<
  Partial<{
    columns: any[];
    tableData: any[];
    action(id: string | null): Promise<void> | null;
  }>
> = ({ columns = [], tableData = [], action = null }) => {
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
          rejectRequest(actId);
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
          {tableData.length && tableData?.map((row, index1) => (
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
                  <Button
                    onClick={() => {
                      setActId(row["id"]);
                      acceptRequest(row["id"]);
                    }}
                  >
                    <SquarePen className="w-4 h-4" /> Accept
                  </Button>
                  <Button
                    onClick={() => {
                      setActId(row["id"]);
                      setDeleteModalOpen(true);
                    }}
                  >
                    <Trash2 className="w-4 h-4" /> Reject
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
