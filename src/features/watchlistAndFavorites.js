import { createSlice } from '@reduxjs/toolkit';

export const watchlistAndFavoritesSlice = createSlice({
  name: 'watchlistAndFavorites',
  initialState: {
    watchlist: [],
    favorites: [],
  },
  reducers: {
    set_watchlist: (state, action) => {
      state.watchlist = action.payload;
    },
    set_favorites: (state, action) => {
      state.favorites = action.payload;
    },
  },
});

export const { set_watchlist, set_favorites } =
  watchlistAndFavoritesSlice.actions;
export const selectWatchlist = (state) => state.watchlistAndFavorites.watchlist;
export const selectFavorites = (state) => state.watchlistAndFavorites.favorites;

export default watchlistAndFavoritesSlice.reducer;
