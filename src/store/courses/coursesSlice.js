import { apiSlice } from "../../Core/services/api/apiSlice";

export const courseApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCourses: builder.query({
      query: () => "course/getall",
      providesTags: ["courses"],
    }),
    getCoursesById: builder.query({
      query: (id) => `course/${id}`,
      providesTags: ["courses"],
    }),
    getCoursesByPagination: builder.query({
      query: (pageInfo) =>
        `course/list?pagenumber=${pageInfo.pagenumber}&pagesize=${pageInfo.pageSize}`,
      providesTags: ["courses"],
    }),
    addStudentToCourse: builder.mutation({
      query: (obj) => ({
        url: `course/addStudentToCourse/${obj.obj}`,
        method: "POST",
        body: obj.courseId,
      }),
      invalidatesTags: ["courses"],
    }),
    deleteStudentFromCourse: builder.mutation({
      query: (obj) => ({
        url: `course/removeStudentFromCourse/${obj.obj}`,
        method: "POST",
        body: obj.courseId,
      }),
      invalidatesTags: ["courses"],
    }),
  }),
});

export const {
  useGetCoursesQuery,
  useGetCoursesByIdQuery,
  useGetCoursesByPaginationQuery,
  useAddStudentToCourseMutation,
  useDeleteStudentFromCourseMutation,
} = courseApiSlice;
