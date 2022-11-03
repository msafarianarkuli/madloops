import { apiSlice } from "../../Core/services/api/apiSlice";

export const uploadImgApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    uploadImg: builder.mutation({
      query: (obj) => ({
        url: `upload/image`,
        method: "POST",
        body: obj,
        headers: {
          "Content-Type": "multipart/form-data",
          Accept: "application/json",
        },
      }),
    }),
  }),
});

export const { useUploadImgMutation } = uploadImgApiSlice;
