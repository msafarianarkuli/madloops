import { apiSlice } from "./../../Core/services/api/apiSlice";

export const studentApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUserById: builder.query({
      query: (id) => ({ url: `student/${id}` }),
      transformResponse: (response, meta, arg) => response.data,
      providesTags: (result, error, id) => [{ type: "Post", id }],
    }),
  }),
});

export const { useGetUserByIdQuery } = studentApiSlice;
