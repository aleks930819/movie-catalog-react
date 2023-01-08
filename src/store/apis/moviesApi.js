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
        query: ({ page, searchQuery }) => {
          if (searchQuery !== '') {
            return {
              url: `/search/movie?query=${searchQuery}&page=${page}&api_key=${API_KEY}`,
            };
          }

          return {
            url: `/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`,
          };
        },
      }),

      getMoviesDetails: builder.query({
        query: ({ id }) =>
          `/movie/${id}?append_to_response=videos,credits&api_key=${API_KEY}`,
      }),

      getGenres: builder.query({
        query: () => {
          return {
            url: `/genre/movie/list?api_key=${API_KEY}&language=en-US`,
          };
        },
      }),

      getRecommendations: builder.query({
        query: ({ movie_id, list }) => {
          return {
            url: `/movie/${movie_id}/${list}?api_key=${API_KEY}`,
          };
        },
      }),
    };
  },
});

export const {
  useGetMoviesQuery,
  useGetMoviesDetailsQuery,
  useGetGenresQuery,
  useGetRecommendationsQuery,
} = moviesApi;
export { moviesApi };
