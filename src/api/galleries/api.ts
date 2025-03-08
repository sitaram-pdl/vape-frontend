import { createApi } from '@reduxjs/toolkit/query/react';
import { z } from 'zod';

import { publicBaseQuery } from '@/lib/api-client';
import { gallerySchema } from '@/schema/gallery.schema';

import { createGalleryFormData, uploadToAlbumFormData } from './helper';
import {
  CreateGalleryResponse,
  GetAllPhotosApiResponse,
  GetGalleryApiResponse,
  GetSingleGalleryApiResponse,
  PutGalleryType,
} from './type';

export type GalleryInput = z.infer<typeof gallerySchema>;

let token = '';

if (typeof window !== 'undefined') {
  token = localStorage.getItem('authToken') || '';
}

export const galleriesApi = createApi({
  reducerPath: 'galleriesApi',
  baseQuery: publicBaseQuery,
  tagTypes: ['gallery'],
  endpoints: (builder) => ({
    createGalleyAlbum: builder.mutation<CreateGalleryResponse, GalleryInput>({
      query: (data) => ({
        url: '/gallery/create',
        method: 'POST',
        body: createGalleryFormData(data),
        headers: { Authorization: `Bearer ${token}` },
      }),
      invalidatesTags: ['gallery'],
      transformResponse: (response: CreateGalleryResponse) => {
        return response;
      },
    }),
    getGalleyAlbum: builder.query<GetGalleryApiResponse, void>({
      query: () => ({
        url: '/gallery/allgallery',
        method: 'GET',
        params: {
          limit: 20,
        },
      }),
      providesTags: ['gallery'],
      transformResponse: (response: GetGalleryApiResponse) => {
        return response;
      },
    }),
    getAllPhotos: builder.query<GetAllPhotosApiResponse, void>({
      query: () => ({
        url: '/gallery/allimages',
        method: 'GET',
        params: {
          limit: 20,
        },
      }),
      providesTags: ['gallery'],
      transformResponse: (response: GetAllPhotosApiResponse) => {
        return response;
      },
    }),
    getGalleyAlbumPhotos: builder.query<
      GetSingleGalleryApiResponse,
      { id: string }
    >({
      query: ({ id }) => ({
        url: '/gallery/' + id,
        method: 'GET',
      }),
      providesTags: ['gallery'],
      transformResponse: (response: GetSingleGalleryApiResponse) => response,
    }),
    deleteGalleryAlbum: builder.mutation<{ message: string }, { id: string }>({
      query: ({ id }) => ({
        url: `/gallery/${id}`,
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` },
      }),
      invalidatesTags: ['gallery'],
      transformResponse: (response: { message: string }) => response,
    }),
    editGalleryAlbum: builder.mutation<
      GetSingleGalleryApiResponse,
      Partial<PutGalleryType>
    >({
      query: ({ id, deleteImage }) => ({
        url: `/gallery/${id}`,
        method: 'PUT',
        body: { deleteImage },
        headers: { Authorization: `Bearer ${token}` },
      }),
      invalidatesTags: ['gallery'],
      transformResponse: (response: GetSingleGalleryApiResponse) => response,
    }),
    uploadImageToGallery: builder.mutation<
      GetSingleGalleryApiResponse,
      Partial<PutGalleryType>
    >({
      query: ({ id, imageFiles }) => ({
        url: `/gallery/${id}`,
        method: 'PUT',
        body: uploadToAlbumFormData(imageFiles),
        headers: { Authorization: `Bearer ${token}` },
      }),
      invalidatesTags: ['gallery'],
      transformResponse: (response: GetSingleGalleryApiResponse) => response,
    }),
  }),
});

export const {
  useCreateGalleyAlbumMutation,
  useGetGalleyAlbumQuery,
  useGetGalleyAlbumPhotosQuery,
  useDeleteGalleryAlbumMutation,
  useEditGalleryAlbumMutation,
  useUploadImageToGalleryMutation,
  useGetAllPhotosQuery,
} = galleriesApi;
