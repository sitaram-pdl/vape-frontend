import { ChevronLeft, ChevronRight } from 'lucide-react';
import React, { useState } from 'react';

import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface PaginationProps {
  currentPage?: number;
  totalPages?: number;
  rowsPerPage?: number;
  rowsPerPageOptions?: number[];
  onPageChange?: (page: number) => void;
  onRowsPerPageChange?: (rowsPerPage: number) => void;
  pageSelect?: boolean;
}

const Pagination = ({
  currentPage = 1,
  totalPages = 1,
  rowsPerPage = 10,
  rowsPerPageOptions = [10, 16, 25, 50, 100],
  onPageChange,
  onRowsPerPageChange,
  pageSelect = true,
}: PaginationProps) => {
  const [currentPageState, setCurrentPage] = useState(currentPage);
  const [rowsPerPageState, setRowsPerPage] = useState(rowsPerPage);

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      onPageChange && onPageChange(page);
    }
  };

  const handleRowsPerPageChange = (value: string) => {
    const newRowsPerPage = Number(value);
    setRowsPerPage(newRowsPerPage);
    onRowsPerPageChange && onRowsPerPageChange(newRowsPerPage);
  };

  const getPageButtons = () => {
    const pages = [];
    pages.push(1);
    for (
      let i = Math.max(2, currentPageState - 1);
      i <= Math.min(totalPages - 1, currentPageState + 1);
      i++
    ) {
      if (pages[pages.length - 1] !== i - 1) {
        pages.push(-1);
      }
      pages.push(i);
    }
    if (totalPages > 1) {
      if (pages[pages.length - 1] !== totalPages - 1) {
        pages.push(-1);
      }
      pages.push(totalPages);
    }
    return pages;
  };

  return (
    <div className="flex items-center justify-between px-2 py-4">
      <div className="flex items-center gap-1 md:gap-2">
        <Button
          variant="outline"
          size="icon"
          onClick={() => goToPage(currentPageState - 1)}
          disabled={currentPageState === 1}
          aria-label="Previous page"
        >
          <ChevronLeft className="size-4" />
        </Button>

        {getPageButtons().map((page, index) =>
          page === -1 ? (
            <div key={`ellipsis-${index}`} className="px-2">
              ...
            </div>
          ) : (
            <Button
              key={`page-${page}`}
              variant={currentPageState === page ? 'default' : 'outline'}
              size="sm"
              onClick={() => goToPage(page)}
              aria-label={`Go to page ${page}`}
              aria-current={currentPageState === page ? 'page' : undefined}
            >
              {page}
            </Button>
          ),
        )}

        <Button
          variant="outline"
          size="icon"
          onClick={() => goToPage(currentPageState + 1)}
          disabled={currentPageState === totalPages || totalPages === 0}
          aria-label="Next page"
        >
          <ChevronRight className="size-4" />
        </Button>
      </div>

      {pageSelect && (
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-500">Rows per page:</span>
          <Select
            value={String(rowsPerPageState)}
            onValueChange={handleRowsPerPageChange}
          >
            <SelectTrigger className="h-8 w-16">
              <SelectValue placeholder={String(rowsPerPageState)} />
            </SelectTrigger>
            <SelectContent>
              {rowsPerPageOptions.map((option) => (
                <SelectItem key={option} value={String(option)}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      )}
    </div>
  );
};

export default Pagination;
