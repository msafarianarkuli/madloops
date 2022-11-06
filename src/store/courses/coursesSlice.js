import { apiSlice } from "../../Core/services/api/apiSlice";

export const courseApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCourses: builder.query({
      query: () => "course/getall",
      transformResponse: (responseData) => {
        const loadedCourse = responseData.result.map((course) => {
          const hour = Math.trunc(Math.random() * 20) + 1;
          const lessonNumber = Math.trunc(Math.random() * 200) + 1;
          const ViewRand = Math.trunc(Math.random() * 200) + 1;
          const likeRand = Math.trunc(Math.random() * 200) + 1;
          course.lessonNumber = lessonNumber;
          course.like = likeRand;
          course.view = ViewRand;
          course.hour = hour;
          return course;
        });
        return loadedCourse;
      },
      providesTags: ["courses"],
    }),
    getCoursesById: builder.query({
      query: (id) => `course/${id}`,
      providesTags: ["courses"],
    }),
    getCoursesLike: builder.query({
      query: (id) => `course/likeCount/${id}`,
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
  useGetCoursesLikeQuery,
} = courseApiSlice;
