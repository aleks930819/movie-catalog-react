import { createSlice } from '@reduxjs/toolkit';

export const searchMovie = createSlice({
  name: 'searchMovie',
  initialState: {
    searchQuery: '',
  },
  reducers: {
    findMovie: (state, action) => {
      state.searchQuery = action.payload;
      console.log(action.payload);
    },
  },
});

export const { findMovie } = searchMovie.actions;
export default searchMovie.reducer;
