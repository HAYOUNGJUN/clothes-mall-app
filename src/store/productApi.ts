import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { ProductItem } from './productSlice';

export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://my-json-server.typicode.com/HAYOUNGJUN/clothes-mall-app/',
  }),
  endpoints: (builder) => ({
    getAllProduct: builder.query<ProductItem[], string>({
      query: (searchQuery) => `products?q=${searchQuery}`,
    }),
    getProductById: builder.query<ProductItem, string>({
      query: (id) => `products/${id}`,
    }),
  }),
});

export const { useGetAllProductQuery, useGetProductByIdQuery } = productApi;
