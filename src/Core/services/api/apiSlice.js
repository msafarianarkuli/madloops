import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.madloops.sepehracademy.ir/api/",
    prepareHeaders: (headers, { getState }) => {
      // By default, if we have a token in the store, let's use that for authenticated requests
      const token = getState().auth.token;

      if (token) {
        headers.set("x-auth-token", `${token}`);
      }
      return headers;
    },
  }),

  endpoints: (builder) => ({}),
});
