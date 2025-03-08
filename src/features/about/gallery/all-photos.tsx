'use client';

import { useState } from 'react';
import Masonry from 'react-masonry-css';
import Viewer from 'react-viewer';

import { useGetAllPhotosQuery } from '@/api/galleries';

const AllPhotos = () => {
  const { data } = useGetAllPhotosQuery();
  const [visible, setVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const breakpointColumns = {
    default: 4,
    1200: 3,
    900: 2,
    600: 1,
  };

  return (
    <div className="mt-5">
      <Masonry
        breakpointCols={breakpointColumns}
        className="flex gap-4"
        columnClassName="masonry-column"
      >
        {data?.data.map((img, index) => (
          <button
            className="w-full"
            key={index}
            onClick={() => {
              setActiveIndex(index);
              setVisible(true);
            }}
          >
            <img
              src={img}
              alt={`Masonry ${index}`}
              className="mb-3 w-full cursor-pointer rounded-lg shadow-md"
              aria-label={`Open image ${index + 1}`}
            />
          </button>
        ))}
      </Masonry>

      <Viewer
        visible={visible}
        onMaskClick={() => setVisible(false)}
        onClose={() => setVisible(false)}
        images={data?.data.map((img) => ({ src: img, alt: 'Image' }))}
        activeIndex={activeIndex}
      />
    </div>
  );
};

export default AllPhotos;
