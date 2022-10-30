import { apiSlice } from "./../../Core/services/api/apiSlice";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    loginStudent: builder.mutation({
      query: (credentials) => ({
        url: "auth/login",
        method: "POST",
        body: credentials,
      }),
      invalidatesTags: ["login"],
    }),
    registerStudent: builder.mutation({
      query: (obj) => ({
        url: "auth/register",
        method: "POST",
        body: obj,
      }),
      invalidatesTags: ["register"],
    }),
    forgetPassword: builder.mutation({
      query: (obj) => ({
        url: "forgetpassword",
        method: "POST",
        body: obj,
      }),
      invalidatesTags: ["forgetpassword"],
    }),
    resetPassword: builder.mutation({
      query: (pass, reset) => ({
        url: `resetPassword/${reset}`,
        method: "POST",
        body: pass,
      }),
      invalidatesTags: ["resetPassword"],
    }),
  }),
});

export const {
  useLoginStudentMutation,
  useRegisterStudentMutation,
  useForgetPasswordMutation,
  useResetPasswordMutation,
} = authApiSlice;
