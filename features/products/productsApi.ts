// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// interface Product {
//   _id: string;
//   name: string;
//   description: string;
//   price: number;
//   image: string;
// }

// interface ProductsResponse {
//   results: Product[];
// }

// export const productsApi = createApi({
//   reducerPath: "productsApi",
//   baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5173/api/" }),
//   endpoints: (builder) => ({
//     getProducts: builder.query<ProductsResponse, void>({
//       query: () => "products",
//     }),
//   }),
// });

// export const { useGetProductsQuery } = productsApi;
