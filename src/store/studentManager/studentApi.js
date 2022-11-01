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
      query: (rest) => ({
        url: `student/${rest._id}`,
        method: "PUT",
        body: rest.rest,
      }),
      invalidatesTags: ["student"],
    }),
  }),
});

export const {
  useGetAllStudentQuery,
  useGetStudentByIdQuery,
  useUpdateStudentInfoMutation,
} = studentApiSlice;
