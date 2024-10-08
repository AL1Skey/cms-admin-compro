import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { columns, tableData } from "./data";
const BorderlessTable = () => {
  return (
    <Table>
      <TableHeader>
        <TableRow className="border-none">
          {
            columns.map((column, index) => (
              <TableHead
                key={`basic-table-column-${index}`}>
                {column.label}
              </TableHead>
            ))
          }
        </TableRow>
      </TableHeader>
      <TableBody className="border-none">
        {tableData.map((row, index) => (
          <TableRow
            key={`table-data-${index}`}
            className="border-none"
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

export default BorderlessTable;