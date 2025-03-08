import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  companyName: z.string().min(1, 'Company Name is required'),
  email: z.string().email('Invalid email address'),
  current_address: z.string().min(1, 'Address is required'),
  subject: z.string().min(1, 'Subject is required'),
  message: z.string().min(1, 'Message is required'),
  nationality: z.string().min(1, 'Nationality is required'),
});
