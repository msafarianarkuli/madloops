import { apiSlice } from "./../../Core/services/api/apiSlice";

export const studentApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllStudent: builder.query({
      query: () => "student/getall",
      providesTags: ["student"],
    }),
    getStudentById: builder.query({
      query: (id) => ({ url: `student/${id}` }),
      // transformResponse: (response) => response.data,
      // providesTags: (id) => [{ type: "student", id }],
    }),
    updateStudentInfo: builder.mutation({
      query: (obj) => ({
        url: `student/${obj._id}`,
        method: "PUT",
        body: obj,
      }),
      invalidatesTags: () => [{ type: "student" }],
    }),
  }),
});

export const {
  useGetAllStudentQuery,
  useGetStudentByIdQuery,
  useUpdateStudentInfoMutation,
} = studentApiSlice;
