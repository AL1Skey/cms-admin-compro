import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { columns, tableData } from "./data";
const StripedRows = () => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          {
            columns.map((column,index)=>(
              <TableHead
               key={`basic-table-column-${index}`}
               className="bg-default-200 dark:bg-default-300"
               >{column.label}</TableHead>
            ))
          }
        </TableRow>
      </TableHeader>
      <TableBody>
        {tableData.map((row,index) => (
          <TableRow
           key={`table-data-${index}`}
           className="even:bg-default-200 dark:even:bg-default-300"
           >
            <TableCell>{row.age}</TableCell>
            <TableCell>{row.first_name}</TableCell>
            <TableCell>{row.last_name}</TableCell>
      
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default StripedRows;