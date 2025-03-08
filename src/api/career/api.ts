import { createApi } from '@reduxjs/toolkit/query/react';
import { z } from 'zod';

import { publicBaseQuery } from '@/lib/api-client';
import { CAArticleSchema } from '@/schema/ca-article.schema';
import { CAInternSchema } from '@/schema/ca-intern.schema';
import { CAOtherSchema } from '@/schema/ca-other.schema';

import {
  createCareerFormData,
  createCareerInternFormData,
  createCareerOtherFormData,
} from './helper';
import {
  AuthResponse,
  GetAllCareerArticleApiResponse,
  GetAllCareerParamType,
  GetCareerArticleByIdResponse,
  GetCareerInternByIdResponse,
  GetCareerOthersByIdResponse,
  PostApiResponse,
} from './type';

export type CareerArticleInput = z.infer<typeof CAArticleSchema>;
export type CareerInternInput = z.infer<typeof CAInternSchema>;
export type CareerOtherInput = z.infer<typeof CAOtherSchema>;
let token = '';

if (typeof window !== 'undefined') {
  token = localStorage.getItem('authToken') || '';
}

export const careerApi = createApi({
  reducerPath: 'careerApi',
  baseQuery: publicBaseQuery,
  tagTypes: ['careerarticle', 'careerintern', 'careerothers'],
  endpoints: (builder) => ({
    careerArticle: builder.mutation<PostApiResponse | null, CareerArticleInput>(
      {
        query: (data) => ({
          url: '/careerarticle/create',
          method: 'POST',
          body: createCareerFormData(data),
        }),
        invalidatesTags: ['careerarticle'],
        transformResponse: (response: { data: PostApiResponse }) =>
          response.data,
      },
    ),
    getAllCareerArticle: builder.query<
      GetAllCareerArticleApiResponse | null,
      GetAllCareerParamType
    >({
      query: (data) => ({
        url: '/careerarticle',
        method: 'GET',
        headers: { Authorization: `Bearer ${token}` },
        params: {
          page: data.page,
          search: data.search,
          limit: data.rowsPerPage,
        },
      }),
      providesTags: ['careerarticle'],
      transformResponse: (response: GetAllCareerArticleApiResponse) => response,
    }),
    getCareerArticleById: builder.query<
      GetCareerArticleByIdResponse | null,
      { id: string }
    >({
      query: ({ id }) => ({
        url: `/careerarticle/${id}`,
        method: 'GET',
        headers: { Authorization: `Bearer ${token}` },
      }),
      providesTags: ['careerarticle'],

      transformResponse: (response: GetCareerArticleByIdResponse | null) =>
        response,
    }),
    updateCareerArticleStatus: builder.mutation<
      { message: string },
      { status: string; id: string }
    >({
      query: ({ status, id }) => ({
        url: `/careerarticle/${id}`,
        method: 'PUT',
        headers: { Authorization: `Bearer ${token}` },
        body: { status },
      }),

      invalidatesTags: ['careerarticle'],
      transformResponse: (response: { message: string }) => response,
    }),
    //Career Intern
    careerIntern: builder.mutation<AuthResponse | null, CareerInternInput>({
      query: (data) => ({
        url: '/careerintern/create',
        method: 'POST',
        body: createCareerInternFormData(data),
      }),
      transformResponse: (response: { data: AuthResponse }) => response.data,
    }),
    careerOther: builder.mutation<PostApiResponse | null, CareerOtherInput>({
      query: (data) => ({
        url: '/careerothers/create',
        method: 'POST',
        body: createCareerOtherFormData(data),
      }),
      transformResponse: (response: { data: PostApiResponse }) => response.data,
    }),

    getAllCareerIntern: builder.query<
      GetAllCareerArticleApiResponse | null,
      GetAllCareerParamType
    >({
      query: (data) => ({
        url: '/careerintern',
        method: 'GET',
        headers: { Authorization: `Bearer ${token}` },
        params: {
          page: data.page,
          search: data.search,
          limit: data.rowsPerPage,
        },
      }),
      providesTags: ['careerintern'],
      transformResponse: (response: GetAllCareerArticleApiResponse) => response,
    }),
    getCareerInternById: builder.query<
      GetCareerInternByIdResponse | null,
      { id: string }
    >({
      query: ({ id }) => ({
        url: `/careerintern/${id}`,
        method: 'GET',
        headers: { Authorization: `Bearer ${token}` },
      }),
      providesTags: ['careerintern'],
      transformResponse: (response: GetCareerInternByIdResponse | null) =>
        response,
    }),
    getAllCareerOthers: builder.query<
      GetAllCareerArticleApiResponse | null,
      GetAllCareerParamType
    >({
      query: (data) => ({
        url: '/careerothers',
        method: 'GET',
        headers: { Authorization: `Bearer ${token}` },
        params: {
          page: data.page,
          search: data.search,
          limit: data.rowsPerPage,
        },
      }),
      providesTags: ['careerothers'],
      transformResponse: (response: GetAllCareerArticleApiResponse) => response,
    }),
    getCareerOthersById: builder.query<
      GetCareerOthersByIdResponse | null,
      { id: string }
    >({
      query: ({ id }) => ({
        url: `/careerothers/${id}`,
        method: 'GET',
        headers: { Authorization: `Bearer ${token}` },
      }),
      providesTags: ['careerothers'],
      transformResponse: (response: GetCareerOthersByIdResponse | null) =>
        response,
    }),
    deleteCareerArticle: builder.mutation<{ message: string }, { id: string }>({
      query: ({ id }) => ({
        url: `/careerarticle/${id}`,
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` },
      }),
      invalidatesTags: ['careerarticle'],
      transformResponse: (response: { message: string }) => response,
    }),
    deleteCareerIntern: builder.mutation<{ message: string }, { id: string }>({
      query: ({ id }) => ({
        url: `/careerintern/${id}`,
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` },
      }),
      invalidatesTags: ['careerintern'],
      transformResponse: (response: { message: string }) => response,
    }),
    deleteCareerOthers: builder.mutation<{ message: string }, { id: string }>({
      query: ({ id }) => ({
        url: `/careerothers/${id}`,
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` },
      }),
      invalidatesTags: ['careerothers'],
      transformResponse: (response: { message: string }) => response,
    }),

    updateCareerInternStatus: builder.mutation<
      { message: string },
      { status: string; id: string }
    >({
      query: ({ status, id }) => ({
        url: `/careerintern/${id}`,
        method: 'PUT',
        body: { status },
        headers: { Authorization: `Bearer ${token}` },
      }),
      invalidatesTags: ['careerintern'],
      transformResponse: (response: { message: string }) => response,
    }),
    updateCareerOthersStatus: builder.mutation<
      { message: string },
      { status: string; id: string }
    >({
      query: ({ status, id }) => ({
        url: `/careerothers/${id}`,
        method: 'PUT',
        body: { status },
        headers: { Authorization: `Bearer ${token}` },
      }),
      invalidatesTags: ['careerothers'],
      transformResponse: (response: { message: string }) => response,
    }),
  }),
});

export const {
  useCareerArticleMutation,
  useCareerInternMutation,
  useCareerOtherMutation,
  useGetAllCareerArticleQuery,
  useGetAllCareerInternQuery,
  useGetAllCareerOthersQuery,
  useGetCareerArticleByIdQuery,
  useGetCareerInternByIdQuery,
  useGetCareerOthersByIdQuery,
  useDeleteCareerArticleMutation,
  useDeleteCareerInternMutation,
  useDeleteCareerOthersMutation,
  useUpdateCareerArticleStatusMutation,
  useUpdateCareerInternStatusMutation,
  useUpdateCareerOthersStatusMutation,
} = careerApi;
