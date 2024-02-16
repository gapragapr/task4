import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_API_URL}`, fetchOptions: {
    mode: 'no-cors',
  }, }),
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (body) => ({
        url: 'register',
        method: 'POST',
        body: body
      })
    }),
    login: builder.mutation({
      query: (body) => ({
        url: 'login',
        method: 'POST',
        body: body
      })
    }),
    blockUser: builder.mutation({
      query: (body) => ({
        url: 'blockUser',
        method: 'POST',
        body: body
      })
    }),
    deleteUser: builder.mutation({
      query: (body) => ({
        url: 'deleteUser',
        method: 'DELETE',
        body: body
      })
    }),
    unblockUser: builder.mutation({
        query: (body) => ({
          url: 'unblockUser',
          method: 'POST',
          body: body
        })
      }),
    getUsers: builder.mutation({
      query: (body) => ({
        url: 'getUsers',
        method: 'POST',
        body: body
      })
    })
  })
});

export const {
  useRegisterMutation,
  useLoginMutation,
  useBlockUserMutation,
  useUnblockUserMutation,
  useDeleteUserMutation,
  useGetUsersMutation
} = api;
