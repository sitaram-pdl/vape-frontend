import { z } from 'zod';

export const gallerySchema = z.object({
  title: z.string().min(1, 'Title is required'),
  description: z.string().min(5, 'Description is required'),
  imageFiles: z.array(z.instanceof(File)).refine((files) => files.length > 0, {
    message: 'At least one image is required',
  }),
});
