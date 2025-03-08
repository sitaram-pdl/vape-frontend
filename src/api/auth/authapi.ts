import { createApi } from '@reduxjs/toolkit/query/react';
import { z } from 'zod';

import { publicBaseQuery } from '@/lib/api-client';
import { loginInputSchema } from '@/schema/auth.schema';

import { AuthResponse } from './type';

export type LoginInput = z.infer<typeof loginInputSchema>;

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: publicBaseQuery,
  endpoints: (builder) => ({
    loginWithEmailAndPassword: builder.mutation<
      AuthResponse | null,
      LoginInput
    >({
      query: (data) => ({
        url: '/auth/login',
        method: 'POST',
        body: data,
      }),
      transformResponse: (response: {
        data: AuthResponse;
        requiredValue: string;
      }) => {
        return response.data;
      },
    }),
  }),
});

export const { useLoginWithEmailAndPasswordMutation } = authApi;
