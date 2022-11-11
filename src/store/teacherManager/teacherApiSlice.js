import { apiSlice } from "../../Core/services/api/apiSlice";

export const teacherApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getLastTeacher: builder.query({
      query: () => "employee/getlastteachers",
      providesTags: ["teacher"],
    }),
    getAllTeachers: builder.query({
      query: () => "employee/getallteachers",
      providesTags: ["teacher"],
    }),
  }),
});

export const { useGetLastTeacherQuery, useGetAllTeachersQuery } =
  teacherApiSlice;
