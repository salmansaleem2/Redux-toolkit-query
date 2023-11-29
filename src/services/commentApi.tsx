import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { Contact } from "../models/contact.model"

export const commentApi = createApi({
  reducerPath: "commentApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/"
  }),
  endpoints: (builder) => ({
    comments: builder.query<any, void>({
      query: () => "/comments"
    }),
    comment: builder.query<any, string>({
      query: (id) => `/comments/${id}`
    }),
    addComment: builder.mutation<void, any>({
      query: comment => ({
        url: "/comments",
        method: "POST",
        body: comment
      })
    }),
    updateComment: builder.mutation<void, any>({
      query: ({ id, ...rest }) => ({
        url: `/comments/${id}`,
        method: "PUT",
        body: rest
      })
    }),
    deleteComment: builder.mutation<void, any>({
      query: ({ id }) => ({
        url: `/comments/${id}`,
        method: "DELETE",
      })
    })

  })
})

export const { useCommentsQuery, useCommentQuery, useAddCommentMutation, useUpdateCommentMutation, useDeleteCommentMutation } = commentApi; 