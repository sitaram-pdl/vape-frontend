import { usePathname } from 'next/navigation';

import { useGetGalleyAlbumQuery } from '@/api/galleries';
import ImageCollection from '@/components/reusable/image-componet';

const SkeletonReceipt = () => {
  return (
    <div className="w-full max-w-md animate-pulse rounded-lg bg-white p-4 shadow-lg">
      <div className="mb-4 h-6 w-3/4 rounded bg-gray-300"></div>
      <div className="grid grid-cols-2 gap-4">
        <div className="h-4 rounded bg-gray-300"></div>
        <div className="h-4 rounded bg-gray-300"></div>
        <div className="h-4 rounded bg-gray-300"></div>
        <div className="h-4 rounded bg-gray-300"></div>
      </div>
      <div className="mt-4 h-6 w-1/2 rounded bg-gray-300"></div>
    </div>
  );
};

const ImageGalleryGrid = () => {
  const { data, isLoading } = useGetGalleyAlbumQuery();

  const pathname = usePathname();

  return (
    <div className="grid cursor-pointer grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-5">
      {(data?.data || []).map((item, index) => (
        <ImageCollection
          key={index}
          item={item}
          isEditable={pathname === '/aboutus/gallery' ? false : true}
        />
      ))}
      {isLoading && <SkeletonReceipt />}
    </div>
  );
};

export default ImageGalleryGrid;
