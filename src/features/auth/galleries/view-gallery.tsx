'use client';
import { Plus } from 'lucide-react';
import React, { useState } from 'react';

import { Typography } from '@/components/reusable';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link } from '@/components/ui/link';
import AllPhotos from '@/features/about/gallery/all-photos';
import ImageGalleryGrid from '@/features/about/gallery/gallery-list';
import { cn } from '@/lib/utils';

function ViewGallery() {
  const [search, setSearch] = useState('');

  const [selected, setSelected] = useState('Gallery');

  const array = ['Gallery', 'All Photos'];

  return (
    <div>
      <div className="flex justify-between gap-5 border-b border-black/10 p-3">
        <Input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-64"
          placeholder="Search by keyword"
        />
        <Link href={'/auth/galleries/create'}>
          <Button variant={'outline'} className="rounded-full border-primary">
            <Plus />
            Add Album
          </Button>
        </Link>
      </div>

      <div className="p-5">
        <div className="mb-6 ">
          {array.map((dat, index) => (
            <button
              className={cn(
                ' px-6 py-2 text-base border border-primary-blue text-primary-blue font-medium transition-colors',
                selected === dat && 'bg-primary-blue text-white',
                index === 0 ? 'rounded-l-full ' : 'rounded-r-full',
              )}
              onClick={() => setSelected(dat)}
              key={index}
            >
              <Typography variant="small">{dat}</Typography>
            </button>
          ))}
        </div>
        {selected === 'All Photos' && <AllPhotos />}
        {selected === 'Gallery' && <ImageGalleryGrid />}
      </div>
    </div>
  );
}

export default ViewGallery;
