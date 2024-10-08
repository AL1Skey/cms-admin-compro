"use client"
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
import { usePathname } from 'next/navigation'
import Link from "next/link";
const BasicTable: React.FC<Partial<{ columns: any[]; tableData: any[] }>> = ({
  columns,
  tableData,
}) => {
  const pathname = usePathname()
  
  return (
    <Table>
      <TableHeader>
        <TableRow>
          {columns?.map((column, index) => (
            <TableHead key={`basic-table-column-${index}`}>{column}</TableHead>
          ))}
          <TableHead>action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {tableData?.map((row, index) => (
          <TableRow key={`table-data-${index}`}>
            {Object.keys(row).map((key, index) => (
              <>
                {key === "image" ? (
                  <TableCell key={`table-data-cell-${index}`}>
                    <img src={row[key]} alt="Image" />
                  </TableCell>
                ) : (
                  <TableCell key={`table-data-cell-${index}`}>
                    {row[key]}
                  </TableCell>
                )}
              </>
            ))}
            <TableCell>
              <div className="flex items-center gap-4">
                <Link href={pathname+`/${row && row["id"] ? row["id"] :""}`}>
                  <Button color="secondary">
                    <Eye className="w-4 h-4" /> View
                  </Button>
                </Link>
                <Link href={pathname+`/update/${row && row["id"] ? row["id"] :""}`}>
                  <Button>
                    <SquarePen className="w-3 h-3" /> Edit
                  </Button>
                </Link>
                <Button>
                  <Trash2 className="w-4 h-4" /> Delete
                </Button>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default BasicTable;
