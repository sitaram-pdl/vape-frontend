import { z } from 'zod';

import { gallerySchema } from '@/schema/gallery.schema';

export type GalleryInput = z.infer<typeof gallerySchema>;
export const createGalleryFormData = (input: GalleryInput): FormData => {
  const formData = new FormData();

  formData.append('title', input.title);
  formData.append('description', input.description);

  input.imageFiles.forEach((file) => {
    formData.append('imageFiles', file);
  });

  return formData;
};

export const uploadToAlbumFormData = (input: File[] | undefined): FormData => {
  const formData = new FormData();

  input &&
    input.forEach((file) => {
      formData.append('imageFiles', file);
    });

  return formData;
};
