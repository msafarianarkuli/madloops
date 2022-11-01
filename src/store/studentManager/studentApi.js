import { apiSlice } from "./../../Core/services/api/apiSlice";

export const studentApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllStudent: builder.query({
      query: (id) => ({ url: `student/${id}` }),
      providesTags: ["student"],
    }),

    getStudentById: builder.query({
      query: (id) => ({ url: `student/${id}` }),
      transformResponse: (response) => response.data,
      providesTags: (id) => [{ type: "student", id }],
    }),
    updateStudentInfo: builder.mutation({
      query: ({ id, ...rest }) => ({
        url: `student/${id}`,
        method: "PUT",
        body: rest,
      }),
      invalidatesTags: ["student"],
    }),
  }),
});

export const {} = studentApiSlice;
