import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { columns, tableData } from "./data";
const BasicTableHead = () => {
  return (
    <Table>
      <TableHeader className="bg-default-200 dark:bg-default-300">
        <TableRow>
          {
            columns.map((column,index)=>(
              <TableHead key={`basic-table-column-${index}`}>{column.label}</TableHead>
            ))
          }
        </TableRow>
      </TableHeader>
      <TableBody>
        {tableData.map((row,index) => (
          <TableRow key={`table-data-${index}`}>
            <TableCell>{row.age}</TableCell>
            <TableCell>{row.first_name}</TableCell>
            <TableCell>{row.last_name}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default BasicTableHead;