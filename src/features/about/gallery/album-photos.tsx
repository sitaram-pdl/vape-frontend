'use client';

import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Masonry from 'react-masonry-css';
import Viewer from 'react-viewer';

import { useGetGalleyAlbumPhotosQuery } from '@/api/galleries';
import { Typography } from '@/components/reusable';

interface GalleryPhotosProps {
  id: string | string[];
}

const GalleryPhotos: React.FC<GalleryPhotosProps> = ({ id }) => {
  const { data } = useGetGalleyAlbumPhotosQuery({ id: `${id}` });
  const [visible, setVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const breakpointColumns = {
    default: 4,
    1200: 3,
    900: 2,
    600: 1,
  };

  const router = useRouter();

  return (
    <div className="flex flex-col gap-14">
      <button onClick={() => router.back()} className="flex items-center gap-2">
        <ArrowLeft className="text-primary-blue" size={16} />
        <Typography className="text-primary-blue">Back</Typography>
      </button>
      <div className="flex flex-col gap-6">
        <Typography variant="h3" className="font-bold text-primary-blue">
          {data?.data.title}
        </Typography>
        <Typography variant="small" className="font-medium text-primary-blue">
          {data?.data.description}
        </Typography>
      </div>
      <Masonry
        breakpointCols={breakpointColumns}
        className="flex gap-4"
        columnClassName="masonry-column"
      >
        {data?.data?.images.map((img, index) => (
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
        images={data?.data.images.map((img) => ({
          src: img,
          alt: 'Image',
        }))}
        activeIndex={activeIndex}
      />
    </div>
  );
};

export default GalleryPhotos;
