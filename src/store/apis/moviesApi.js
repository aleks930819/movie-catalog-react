import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_KEY = process.env.REACT_APP_API_KEY;

const moviesApi = createApi({
  reducerPath: 'movies',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.themoviedb.org/3',
  }),

  endpoints: (builder) => {
    return {
      getMovies: builder.query({
        query: ({ page }) =>
          `/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`,
      }),

      getMoviesDetails: builder.query({
        query: ({id}) =>
          `/movie/${id}?append_to_response=videos,credits&api_key=${API_KEY}`,
      }),
    };
  },
});

export const { useGetMoviesQuery, useGetMoviesDetailsQuery } = moviesApi;
export { moviesApi };
