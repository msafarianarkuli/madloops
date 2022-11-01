import { apiSlice } from '../../Core/services/api/apiSlice';

export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCourses: builder.query({
      query: () => 'course/getall',
    }),
  }),
});

export const { useGetCoursesQuery } = extendedApiSlice;
