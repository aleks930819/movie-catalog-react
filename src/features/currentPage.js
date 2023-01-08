import { createSlice } from '@reduxjs/toolkit';

export const page = createSlice({
  name: 'currentPage',
  initialState: {
    pageNumber: 1,
  },
  reducers: {
    handlePage: (state, action) => {
      if (action.payload === 'increase') {
        state.pageNumber += 1;
      } else if (action.payload === 'decrease') {
        state.pageNumber -= 1;
      } else if (action.payload === 'first'){
        state.pageNumber = 1;
      }
    },
  },
});

export const { handlePage } = page.actions;
export default page.reducer;
