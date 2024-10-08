import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { columns, tableData } from "./data";
const BorderedTable = () => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          {
            columns.map((column, index) => (
              <TableHead
                key={`basic-table-column-${index}`}
                className="border border-default-100 dark:border-default-300"
              >{column.label}</TableHead>
            ))
          }
        </TableRow>
      </TableHeader>
      <TableBody className="[&_tr:last-child]:border">
        {tableData.map((row, index) => (
          <TableRow
            key={`table-data-${index}`}
            className="border border-default-100 dark:border-default-300"
          >
            <TableCell className="border border-default-100 dark:border-default-300">{row.age}</TableCell>
            <TableCell className="border border-default-100 dark:border-default-300">{row.first_name}</TableCell>
            <TableCell className="border border-default-100 dark:border-default-300">{row.last_name}</TableCell>

          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default BorderedTable;