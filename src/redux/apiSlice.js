import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const apiSlice = createApi({
  // defaults path is 'api', so all your RTKQ cache data will be stored under state.api.
  reducerPath: 'api',
  //fetchBaseQuery is a small wrapper around the standard fetch()
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3333' }),
  tagTypes: ['Users', 'Todos'],
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: () => `/users/`,
      providesTags: ['Users']
    }),
    getAllTodos: builder.query({
      query: () => `/todos/`,
      transformResponse: (res, meta, arg) => {
        console.log(res)
        console.log(meta)
        console.log(arg)
        return res.sort( (a,b) => b.id - a.id)
      },
      providesTags: ['Todos']
    }),
    addTodo: builder.mutation({
      query: (todo) => ({
        url: `/todos/`,
        method: 'POST',
        body: todo
      }),
      invalidatesTags: ['Todos']
    }),
    updateTodo: builder.mutation({
      query: todo => ({
        url: `/todos/${todo.id}`,
        method: 'PATCH', 
        body: todo
      }),
      invalidatesTags: ['Todos']
    }),
    deleteTodo: builder.mutation({
      query: (todo) => ({
        url: `/todos/${todo.id}`,
        method: 'DELETE',
        body: todo.id
      }),
      invalidatesTags: ['Todos']
    })
  }),
})



export const { useGetAllUsersQuery, useGetAllTodosQuery, useAddTodoMutation, useUpdateTodoMutation, useDeleteTodoMutation } = apiSlice
