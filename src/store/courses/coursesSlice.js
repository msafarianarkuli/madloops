import { apiSlice } from "../../Core/services/api/apiSlice";

export const courseApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCourses: builder.query({
      query: () => "course/getall",
    }),
    providesTags: ["courses"],
  }),
});

export const { useGetCoursesQuery } = courseApiSlice;
