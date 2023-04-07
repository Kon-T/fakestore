import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IProduct } from "../../models/models";

export const fakestoreApi = createApi({
  reducerPath: "product/api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://fakestoreapi.com/" }),
  endpoints: (builder) => ({
    getProduct: builder.query<IProduct[], string>({
      query: (category) => `products/${category}`,
    }),
    getCategories: builder.query<string[], string>({
      query: () => "products/categories",
    }),
    getSingleProduct: builder.query<IProduct, string>({
      query: (id) => `products/${id}`,
    }),
  }),
});

export const {
  useGetProductQuery,
  useGetCategoriesQuery,
  useGetSingleProductQuery,
} = fakestoreApi;
