import { createApi } from '@reduxjs/toolkit/query/react';
import { z } from 'zod';

import { publicBaseQuery } from '@/lib/api-client';
import { contactFormSchema } from '@/schema/contact.schema';

import { AuthResponse } from './type';

export type ContactInput = z.infer<typeof contactFormSchema>;

export const contactApi = createApi({
  reducerPath: 'contactApi',
  baseQuery: publicBaseQuery,
  endpoints: (builder) => ({
    contactEmail: builder.mutation<AuthResponse | null, ContactInput>({
      query: (data) => ({
        url: '/contact/create',
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

export const { useContactEmailMutation } = contactApi;
