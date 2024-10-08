import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { columns, tableData } from "./data";
const BasicTable = () => {
  return (
    <Table>
      <TableHeader>
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
            <TableCell>{row.last_name}</TableCell>
      
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default BasicTable;