import { configureStore } from '@reduxjs/toolkit';
import { moviesApi } from './apis/moviesApi';
import { setupListeners } from '@reduxjs/toolkit/query';
import genreOrCategoryReducer from '../features/currentGenreOrCategory';
import pageReducer from '../features/currentPage';
import userReducer from '../features/user';
import watchlistAndFavoritesReducer from '../features/watchlistAndFavorites';

export const store = configureStore({
  reducer: {
    genreOrCategory: genreOrCategoryReducer,
    page: pageReducer,
    user: userReducer,
    watchlistAndFavorites: watchlistAndFavoritesReducer,
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
  useGetActorDetailsByIdQuery,
  useGetMoviesByActorIdQuery,
} from './apis/moviesApi';
