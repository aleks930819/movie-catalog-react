import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    watchlist: [],
    favorites: [],
  },

  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
      state.watchlist = [];
      state.favorites = [];
    },
    set_watchlist: (state, action) => {
      state.watchlist = action.payload;
    },
    set_favorites: (state, action) => {
      state.favorites = action.payload;
    },
  },
});

export const { login, logout, set_favorites, set_watchlist } =
  userSlice.actions;
export const selectUser = (state) => state.user.user;
export const selectWatchlist = (state) => state.user.watchlist;
export const selectFavorites = (state) => state.user.favorites;
export default userSlice.reducer;
