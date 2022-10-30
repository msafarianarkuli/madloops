import { apiSlice } from "./../../Core/services/api/apiSlice";

export const studentApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUserById: builder.query({
      query: (id) => `student/${id}`,
      providesTags: ["userId"],
    }),
  }),
});

export const { useGetUserByIdQuery } = studentApiSlice;
