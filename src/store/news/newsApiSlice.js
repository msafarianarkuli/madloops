import { apiSlice } from "./../../Core/services/api/apiSlice";

export const newsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllNews: builder.query({
      query: () => "news",
      providesTags: ["news"],
    }),
    getTopNews: builder.query({
      query: () => "news/topNews",
      providesTags: ["news"],
    }),
    getTopArticles: builder.query({
      query: () => "news/topArticles",
      providesTags: ["news"],
    }),
    getNewsById: builder.query({
      query: (id) => ({ url: `news/${id}` }),
      transformResponse: (response) => response.data,
      providesTags: (id) => [{ type: "news", id }],
    }),
    addNews: builder.mutation({
      query: (obj) => ({
        url: "news/",
        method: "POST",
        body: obj,
      }),
      invalidatesTags: ["news"],
    }),
    updateNews: builder.mutation({
      query: ({ id, ...rest }) => ({
        url: `news/${id}`,
        method: "PUT",
        body: rest,
      }),
      invalidatesTags: ["news"],
    }),
    deleteNews: builder.mutation({
      query: (id) => ({
        url: `news/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["news"],
    }),
  }),
});

export const {
  useGetAllNewsQuery,
  useGetTopNewsQuery,
  useGetTopArticlesQuery,
  useGetNewsByIdQuery,
  useDeleteNewsMutation,
  useAddNewsMutation,
  useUpdateNewsMutation,
} = newsApiSlice;
