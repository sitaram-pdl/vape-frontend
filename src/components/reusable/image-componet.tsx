import { EllipsisVertical } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import {
  galleriesApi,
  GallerySingleItemType,
  useDeleteGalleryAlbumMutation,
} from '@/api/galleries';
import { useClickOutside } from '@/hooks/use-click-outside';

import ConfirmDialog from './confirmdialog';
import { successToast } from './toast';
import { Typography } from './typography';

const ImageCollection = ({
  item,
  isEditable = false,
}: {
  item: GallerySingleItemType;
  isEditable?: boolean;
}) => {
  const displayedImages = [...item.images].slice(0, 4);
  const router = useRouter();
  const dispatch = useDispatch();

  while (displayedImages.length < 4) {
    displayedImages.push('');
  }

  const pathname = usePathname();

  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);

  const modalRef = useClickOutside<HTMLDivElement>(() =>
    setDropdownOpen(false),
  );

  const [deleteGalleryAlbum] = useDeleteGalleryAlbumMutation();

  const handleDelete = async (id: string) => {
    const res = await deleteGalleryAlbum({ id });
    if ('data' in res && res.data) {
      dispatch(galleriesApi.util.invalidateTags(['gallery']));
      successToast(res.data.message);
    }
  };

  return (
    <div className="rounded-lg bg-gray-100 p-4 hover:shadow-md">
      <div className="mb-3 grid grid-cols-2 gap-2">
        {displayedImages.map((image, index) => (
          <button
            key={index}
            onClick={() => router.push(pathname + '/' + item._id)}
          >
            <div className="relative aspect-square">
              {image ? (
                <img
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  className="size-full rounded-md object-cover"
                />
              ) : (
                <div className="size-full rounded-md bg-gray-200" />
              )}
              {index === 3 && item.images.length > 4 && (
                <div className="absolute inset-0 flex items-center justify-center rounded-md bg-black/40">
                  <span className="text-xl font-semibold text-white">
                    +{item.images.length - 4}
                  </span>
                </div>
              )}
            </div>
          </button>
        ))}
      </div>
      <div className="flex justify-between">
        <Typography variant="small" className="font-bold text-primary-blue">
          {item.title}
        </Typography>
        {isEditable && (
          <div ref={modalRef} className="relative">
            <EllipsisVertical
              className="text-black"
              onClick={() => setDropdownOpen(true)}
            />
            {dropdownOpen && (
              <div className="absolute right-0 top-full mt-2 w-48 rounded-lg border bg-white shadow-lg">
                <ConfirmDialog onConfirm={() => handleDelete(item._id)}>
                  <Typography variant="small">Delete</Typography>
                </ConfirmDialog>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageCollection;
