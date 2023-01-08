import { configureStore } from '@reduxjs/toolkit';
import { moviesApi } from './apis/moviesApi';
import { setupListeners } from '@reduxjs/toolkit/query';
import searchMovieReducer from '../components/features/searchMovie';
import genreOrCategoryReducer from '../components/features/currentGenreOrCategory';

export const store = configureStore({
  reducer: {
    searchMovie: searchMovieReducer,
    genreOrCategory: genreOrCategoryReducer,
    [moviesApi.reducerPath]: moviesApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(moviesApi.middleware);
  },
});

setupListeners(store.dispatch);

export {
  useGetMoviesQuery,
  useGetMoviesDetailsQuery,
  useGetGenresQuery,
  useGetRecommendationsQuery,
} from './apis/moviesApi';
