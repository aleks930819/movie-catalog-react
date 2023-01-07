import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_KEY = process.env.REACT_APP_API_KEY;

console.log(API_KEY);

const moviesApi = createApi({
  reducerPath: 'movies',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.themoviedb.org/3',
  }),

  endpoints: (builder) => {
    return {
      getMovies: builder.query({
        query: ({ page = 1 }) =>
          `/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`,
      }),
    };
  },
});

export const { useGetMoviesQuery } = moviesApi;
export { moviesApi };
