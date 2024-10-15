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
import { useRouter } from 'next/navigation';
import { useState } from "react";
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
                  <Link
                    href={'/about-us/alumni/add' + `/${row && row["id"] ? row["id"] : ""}`}
                  >
                    <Button color="secondary">
                      <Eye className="w-4 h-4" /> Up to About Us
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
    </div>
  );
};

export default BasicTable;
