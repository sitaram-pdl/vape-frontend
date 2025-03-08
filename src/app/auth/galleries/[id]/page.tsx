'use client';

import { ArrowLeft } from 'lucide-react';
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

import {
  useEditGalleryAlbumMutation,
  useGetGalleyAlbumPhotosQuery,
  useUploadImageToGalleryMutation,
} from '@/api/galleries';
import { errorToast, successToast, Typography } from '@/components/reusable';
import { Button } from '@/components/ui/button';
import { Spinner } from '@/components/ui/spinner';
import AllGalleryPhotos from '@/features/about/gallery/all-gallery-photos';
import { cn } from '@/utils/cn';

function Page() {
  const { id } = useParams();

  const router = useRouter();

  const ref = useRef<HTMLInputElement | null>(null);

  const [editGalleryAlbum] = useEditGalleryAlbumMutation();

  const [uploadImageToGallery, { isLoading }] =
    useUploadImageToGalleryMutation();

  const { data } = useGetGalleyAlbumPhotosQuery({ id: `${id}` });

  const [selected, setSelected] = useState<string[]>([]);

  const onDelete = async () => {
    const res = await editGalleryAlbum({ id: `${id}`, deleteImage: selected });

    if ('data' in res && res.data) {
      successToast(res.data.message);
    }
  };

  const handleUploadClick = () => {
    if (ref.current) ref.current.click();
  };

  useEffect(() => {
    if (ref.current) {
      ref.current.webkitdirectory = true;
    }
  }, []);

  const handleUploadFolder = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    try {
      const allowedTypes = [
        'image/jpeg',
        'image/jpg',
        'image/png',
        'image/tiff',
        'image/avif',
        'image/webp',
        'image/heic',
      ];
      const imageList = event.target.files;

      if (imageList) {
        const filesArray = Array.from(imageList);

        const files = filesArray.filter((file) =>
          allowedTypes.includes(file.type),
        );

        console.log('files', files);

        if (files.length === 0) {
          errorToast('No valid images found in the selected folder.');
          return;
        }
        const res = await uploadImageToGallery({
          id: `${id}`,
          imageFiles: files,
        });
        if ('data' in res && res.data) {
          successToast(res.data.message);
        }
      }
    } catch (error) {
      console.log('error', error);
    }
  };

  return (
    <div className="flex flex-col gap-2 p-8">
      <div className="flex items-center justify-between">
        <button
          onClick={() => router.back()}
          className="flex w-fit gap-5 text-primary-blue"
        >
          <ArrowLeft /> Back
        </button>
        <div className="flex gap-4">
          <Button
            className={cn(
              selected.length > 0
                ? 'opacity-100'
                : 'opacity-0 cursor-auto pointer-events-none',
              'bg-red-500 text-white hover:bg-red-300',
            )}
            onClick={() => onDelete()}
          >
            Delete
          </Button>
          <Button onClick={handleUploadClick}>
            {isLoading ? (
              <>
                <Spinner /> {'Uploading'}
              </>
            ) : (
              'Upload New'
            )}
          </Button>
        </div>
      </div>
      <div className="mt-4 flex flex-col gap-5">
        <Typography variant="h4" className="font-semibold text-primary-blue">
          {data?.data.title}
        </Typography>
        <Typography className="font-semibold text-primary-blue">
          {data?.data.description}
        </Typography>
      </div>
      <input
        type="file"
        ref={ref}
        onChange={handleUploadFolder}
        className="hidden"
        accept="image/png, image/jpeg, image/jpg, image/tiff, image/avif, image/webp, image/heic"
        multiple
      />

      <AllGalleryPhotos
        selected={selected}
        images={data?.data.images || []}
        setSelected={setSelected}
      />

      {/* <AllPhotos images={data?.data.images || []} /> */}
    </div>
  );
}

export default Page;
