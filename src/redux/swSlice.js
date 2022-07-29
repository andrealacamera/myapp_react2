import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const swSlice = createApi({
  // defaults path is 'api', so all your RTKQ cache data will be stored under state.api.
  reducerPath: 'starwars',
  //fetchBaseQuery is a small wrapper around the standard fetch()
  baseQuery: fetchBaseQuery({ baseUrl: 'https://swapi.dev/api/' }),
  endpoints: (builder) => ({
    getAllPlanets: builder.query({
      query: (page) => `/planets/?page=${page}`,
      transformResponse: res => {
        console.log(res);
        return res;
      }
    }),
    getAllPeople: builder.query({
      query: (page) => `/people/?page=${page}`,
      transformResponse: res => {
        console.log(res);
        return res;
      }
    }),
    getAllStarships: builder.query({
      query: (page) => `/starships/?page=${page}`,
      transformResponse: res => {
        console.log(res);
        return res;
      }
    }),
    getAllVehicles: builder.query({
      query: (page) => `/vehicles/?page=${page}`,
      transformResponse: res => {
        console.log(res);
        return res;
      }
    })
  })
});


export const { 
  useGetAllPlanetsQuery,
  useGetAllPeopleQuery, 
  useGetAllStarshipsQuery,
  useGetAllVehiclesQuery
 } = swSlice

