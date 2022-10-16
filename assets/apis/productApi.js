import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const productApi = createApi({
    reducerPath: 'productApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://product.hackuiowa/api/v2/' }),
    endpoints: (builder) => ({
      getbyBarCode: builder.query({
        query: (barcode) => `product/${barcode}`,
      }),
    }),
  })