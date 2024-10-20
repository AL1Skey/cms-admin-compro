"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CheckIcon, Eye, SquarePen, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import Link from "next/link";
import DeleteConfirmationDialog from "@/components/delete-confirmation-dialog";
import { useRouter } from 'next/navigation';
import { useState } from "react";
import { acceptRequest, rejectRequest } from "../action/action";
import { toast } from "sonner";
const BasicTable: React.FC<Partial<{
  columns: any[];
  tableData: any[]|undefined|null;
  action(id: string | null): Promise<void>|null;
}>> = ({ columns = [], tableData = [], action=null }) => {
  const pathname = usePathname() ?? "";
  const router = useRouter();
  const [deleteModalOpen, setDeleteModalOpen] = useState<boolean>(false);
  const [actId, setActId] = useState<string | null>(null);
  return (
    <div >
      <DeleteConfirmationDialog
        open={deleteModalOpen}
        onClose={() => {
          setActId(null);
          setDeleteModalOpen(false);
        }}
        onConfirm={() => {
          async function runAct(){
          if (action){
          await action(actId);
          }
          router.refresh();
          }
          runAct();
        }}
        defaultToast={false}
      />
      <Table>
        <TableHeader>
          <TableRow>
            {columns?.map((column, index) => (
              <TableHead key={`basic-table-column-${index}`} className="text-center">
                {column}
              </TableHead>
            ))}
            <TableHead className="text-center">action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tableData?.map((row, index1) => (
            <TableRow key={`table-data-${index1}`}>
              {Object.keys(row).map((key, index) => (
                <>
                  { key === "approval" && (
                    <TableCell key={`table-data-cell-${index}`}>
                      {row[key] ? "Approved" : "Not Approved"}
                    </TableCell>
                  )}
                  {key === "id" && (
                    <TableCell key={`table-data-cell-${index}`}>
                      {index1 + 1}
                    </TableCell>
                  )}

                  {!["image", "id","createdAt","updatedAt","approval"].includes(key) && (
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
                      async function runAct(){
                        try {
                          await acceptRequest(actId);
                          router.push("/staff/alumni-request");
                          toast.success("Request has been accepted");
                        } catch (error) {
                          toast.error("Failed to accept request");
                        }
                      }
                      runAct();
                    }}
                    >
                      <CheckIcon className="w-3 h-3" /> Accept
                    </Button>
                 
                  <Button
                    onClick={() => {
                      setActId(row["id"]);
                      async function runAct(){
                        try {
                          await rejectRequest(actId);
                          router.push("/staff/alumni-request");
                          toast.success("Request has been rejected");
                        } catch (error) {
                          toast.error("Failed to accept request");
                        }
                      }
                      runAct();
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
    </div>
  );
};

export default BasicTable;
