import { configureStore } from '@reduxjs/toolkit';
import { moviesApi } from './apis/moviesApi';
import { setupListeners } from '@reduxjs/toolkit/query';

export const store = configureStore({
  reducer: {
    [moviesApi.reducerPath]: moviesApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(moviesApi.middleware);
  },
});

setupListeners(store.dispatch);

export { useGetMoviesQuery, useGetMoviesDetailsQuery } from './apis/moviesApi';
