import { Button } from '@/components/ui/button';
import { Table } from '@tanstack/react-table';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface DataTablePaginationProps {
  table: Table<any>;
}

const TablePagination = ({ table }: DataTablePaginationProps) => {
  return (
    <div className="flex items-center justify-end py-4 px-10">
      <div className="flex-1 text-sm text-muted-foreground">
        {table.getFilteredSelectedRowModel().rows.length} of{" "}
        {table.getFilteredRowModel().rows.length} row(s) selected.
      </div>
      <div className="flex items-center gap-2 flex-none">
        <Button
          variant="outline"
          size="icon"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
          className='w-8 h-8'
        >
          <ChevronLeft className='w-4 h-4' />
        </Button>
        {table.getPageOptions().map((page, pageIndex) => (
          <Button
            key={`basic-data-table-${pageIndex}`}
            onClick={() => table.setPageIndex(pageIndex)}
            size="icon"
            className={`w-8 h-8 hover:text-primary-foreground ${table.getState().pagination.pageIndex === pageIndex ? 'bg-default' : 'bg-default-300 text-default'}`}
          >
            {page + 1}
          </Button>

        ))}
        <Button
          variant="outline"
          size="icon"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
          className='w-8 h-8'
        >
          <ChevronRight className='w-4 h-4' />
        </Button>
      </div>
    </div>
  );
};

export default TablePagination;