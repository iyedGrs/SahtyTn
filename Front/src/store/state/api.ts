// then inject the other endpoints
// create api
// login / register mutations

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080/api",
    credentials: "include",
  }),
  tagTypes: ["Auth", "Contact"],
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (userData) => ({
        url: "/user/auth/login",
        method: "POST",
        body: userData,
      }),
      invalidatesTags: ["Auth"],
    }),
    registerUser: builder.mutation({
      query: (userData) => ({
        url: "/user/auth/register",
        method: "POST",
        body: userData,
      }),
      invalidatesTags: ["Auth"],
    }),
    getCurrentUser: builder.query({
      query: () => "/user/me",
    }),
    submitContact: builder.mutation({
      query: (contactData) => ({
        url: "/message/contact",
        method: "POST",
        body: contactData,
      }),
      invalidatesTags: ["Contact"],
    }),
  }),
});

export const {
  useLoginUserMutation,
  useRegisterUserMutation,
  useSubmitContactMutation,
  useGetCurrentUserQuery,
} = api;
