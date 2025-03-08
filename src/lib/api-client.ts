import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const PRIVATE_API_URL = process.env.NEXT_PUBLIC_PRIVATE_API_URL;

const publicBaseQuery = fetchBaseQuery({
  baseUrl: API_URL,
});

const privateBaseQuery = fetchBaseQuery({
  baseUrl: PRIVATE_API_URL,
  prepareHeaders: (headers) => {
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('token');
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
    }
    return headers;
  },
});

export { publicBaseQuery, privateBaseQuery };
