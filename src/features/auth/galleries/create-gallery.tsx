'use client';
import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React from 'react';
import { z } from 'zod';

import { useCreateGalleyAlbumMutation } from '@/api/galleries';
import { successToast, Typography } from '@/components/reusable';
import ImageUpload from '@/components/reusable/image-upload';
import { Button } from '@/components/ui/button';
import { Form, Input, Textarea } from '@/components/ui/form';
import { Spinner } from '@/components/ui/spinner';
import { gallerySchema } from '@/schema/gallery.schema';

export type GalleryInput = z.infer<typeof gallerySchema>;

function CreateGalleries() {
  const [createGalleyAlbum, { isLoading }] = useCreateGalleyAlbumMutation();
  const router = useRouter();
  const handleSubmit = async (body: GalleryInput) => {
    const res = await createGalleyAlbum(body);

    if ('data' in res && res.data) {
      successToast(res.data.message);
      router.replace('/auth/galleries');
    }
  };

  return (
    <div className=" min-h-[92vh] bg-bluish-white/30">
      <div className="flex justify-between gap-5 border-b border-black/10 bg-white p-3">
        <button
          className="flex gap-2 text-primary-blue"
          onClick={() => router.replace('/auth/galleries')}
        >
          <ArrowLeft />
          <Typography>Add new album</Typography>
        </button>
      </div>

      <div className="container">
        <div className="mx-auto max-w-3xl">
          <Form
            onSubmit={handleSubmit}
            className="mt-8 w-full"
            schema={gallerySchema}
          >
            {({ register, formState, setValue }) => (
              <>
                <div>
                  <Typography className="text-primary-blue">Title</Typography>
                  <Input
                    type="text"
                    className="h-12 w-full rounded-xl"
                    error={formState.errors['title']}
                    registration={register('title')}
                  />
                </div>
                <div>
                  <Typography className="text-primary-blue">
                    Description
                  </Typography>
                  <Textarea
                    error={formState.errors['description']}
                    rows={5}
                    registration={register('description')}
                    className="w-full rounded-xl bg-white"
                  />
                </div>

                <div>
                  <Typography className="text-primary-blue">
                    Upload images
                  </Typography>

                  <ImageUpload
                    error={formState.errors['imageFiles']}
                    onChange={(e) => {
                      setValue('imageFiles', e);
                    }}
                  />
                </div>

                <div className="flex w-full justify-end">
                  <Button type="submit" className="rounded-full">
                    {isLoading && <Spinner />} Add new album
                  </Button>
                </div>
              </>
            )}
          </Form>
        </div>
      </div>
    </div>
  );
}

export default CreateGalleries;
