'use client';

import { FileTextIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { DateRange } from 'react-day-picker';

import { useGetAllCareerArticleQuery, UserProfile } from '@/api/career';
import NoDataComponent from '@/components/reusable/no-data-component';
import Pagination from '@/components/reusable/pagination';
import Table, { Column } from '@/components/reusable/table';
import { Button } from '@/components/ui/button';
import { DateRangePicker } from '@/components/ui/date-range-picker';
import { Input } from '@/components/ui/input';
import useDebounce from '@/hooks/use-debounce';
import { formatDate } from '@/lib/date-helper';

function CareerArticle() {
  const [visible, setVisible] = useState(false);

  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [page, setPage] = useState(1);

  const router = useRouter();

  const [search, setSearch] = useState('');

  const [date, setDate] = useState<DateRange | undefined>(undefined);
  const [currentResume, setCurrentResume] = useState<string | null>(null);

  const debouncedSearchTerm = useDebounce(search, 500);

  const { data } = useGetAllCareerArticleQuery({
    page,
    search: debouncedSearchTerm,
    rowsPerPage,
  });

  const openViewer = (url: string) => {
    setCurrentResume(url);
    setVisible(true);
  };

  const closeViewer = () => {
    setVisible(false);
    setCurrentResume(null);
  };
  const columns: Column<UserProfile>[] = [
    {
      key: 'firstName',
      header: 'Name',
      render: (profile) => (
        <button className=" text-gray-600 hover:text-black">
          {profile.firstName + ' ' + profile.lastName}
        </button>
      ),
      onColumnClick: (item) => router.push('/auth/career/article/' + item._id),
    },
    {
      key: 'email',
      header: 'Email',
      onColumnClick: (item) => router.push('/auth/career/article/' + item._id),
    },
    {
      key: 'permanentAddress',
      header: 'Permanent Address',
      onColumnClick: (item) => router.push('/auth/career/article/' + item._id),
    },

    {
      key: 'createdAt',
      header: 'Date',
      render: (profile) => (
        <button className="text-gray-600 hover:text-black">
          {formatDate(profile.createdAt)}
        </button>
      ),
      onColumnClick: (item) => router.push('/auth/career/article/' + item._id),
    },
    {
      key: 'updatedAt',
      header: 'Resume',
      render: (profile) => (
        <button
          onClick={() => openViewer(profile.resume)}
          className="w-full items-center text-primary-blue hover:underline"
        >
          <FileTextIcon />
        </button>
      ),
    },
  ];

  const clearFilter = () => {
    setPage(1);
    setSearch('');
    setDate(undefined);
  };

  return (
    <div className="w-full">
      <div className="flex gap-5 border-b border-black/10 p-3">
        <Input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-64"
          placeholder="Search by keyword"
        />
        <DateRangePicker value={date} onChange={setDate} className="w-64" />
        <Button onClick={clearFilter} variant={'outline'}>
          Clear
        </Button>
      </div>
      {data?.data && data?.data.length > 0 && (
        <Table columns={columns} data={data?.data || []} />
      )}
      {data?.data && data?.data.length < 1 && <NoDataComponent />}

      {data?.data && data?.data.length > 0 && (
        <div className="md:w-1/2">
          <Pagination
            totalPages={data?.meta.totalPages}
            currentPage={page}
            rowsPerPage={rowsPerPage}
            onRowsPerPageChange={(rows) => setRowsPerPage(rows)}
            onPageChange={(page) => setPage(page)}
          />
        </div>
      )}

      {visible && currentResume && (
        <button
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/35"
          onClick={closeViewer}
        >
          <button
            className="relative max-h-[90vh] w-full max-w-3xl overflow-auto rounded-lg bg-white p-4 shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute right-2 top-2 text-2xl text-gray-500 hover:text-black"
              onClick={closeViewer}
            >
              ✖
            </button>
            {currentResume.endsWith('.pdf') ? (
              <iframe
                src={currentResume}
                className="h-[80vh] w-full"
                title="Resume"
              />
            ) : (
              <img src={currentResume} alt="Resume" className="w-full" />
            )}
          </button>
        </button>
      )}
    </div>
  );
}

export default CareerArticle;
