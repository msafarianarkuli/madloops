import { apiSlice } from "../../Core/services/api/apiSlice";

export const teacherApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getLastTeacher: builder.query({
      query: () => "employee/getlastteachers",
      providesTags: ["teacher"],
    }),
  }),
});

export const { useGetLastTeacherQuery } = teacherApiSlice;
