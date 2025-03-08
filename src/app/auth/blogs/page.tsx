import { PenLine, Plus } from 'lucide-react';
import React from 'react';

import { Typography } from '@/components/reusable';
import Table, { Column } from '@/components/reusable/table';

interface Blog {
  id: string;
  title: string;
  description: string;
  date: string;
  category: string;
  status: 'Published' | 'Draft';
}

const BlogManagement = () => {
  const columns: Column<Blog>[] = [
    { key: 'title', header: 'Title' },
    { key: 'description', header: 'Description' },
    { key: 'date', header: 'Date' },
    { key: 'category', header: 'Category' },
    {
      key: 'status',
      header: 'Status',
      render: (blog) => (
        <span
          className={`rounded-full px-3 py-1 text-sm text-white ${
            blog.status === 'Published' ? 'bg-green-500' : 'bg-gray-400'
          }`}
        >
          {blog.status}
        </span>
      ),
    },
    {
      key: 'actions' as keyof Blog,
      header: '',
      render: (_blog) => (
        <button className="text-gray-600 hover:text-black">
          <PenLine />
        </button>
      ),
    },
  ];

  const blogs: Blog[] = [
    {
      id: '1',
      title: 'Understanding React Hooks',
      description: 'A deep dive into React Hooks and how to use them.',
      date: '12 Dec 2024',
      category: 'React',
      status: 'Published',
    },
    {
      id: '2',
      title: 'Next.js vs. React',
      description:
        'A comparison of Next.js and React for modern web development.',
      date: '15 Dec 2024',
      category: 'Frontend',
      status: 'Draft',
    },
  ];

  return (
    <div className="p-6">
      <div className="mb-6 flex items-center justify-between">
        <Typography variant="h4" className="font-semibold text-primary-blue">
          Blogs
        </Typography>
        <button className="flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-black hover:bg-gray-50">
          <Plus size={16} />
          <Typography variant="small" className="text-primary-blue">
            Add New Blog
          </Typography>
        </button>
      </div>
      <Table columns={columns} data={blogs} />
    </div>
  );
};

export default BlogManagement;
