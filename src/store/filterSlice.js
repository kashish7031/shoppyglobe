// src/store/filterSlice.js
import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    searchTerm: '',
  },
  reducers: {
    // Action to set the search term from the search bar 
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
  },
});

export const { setSearchTerm } = filterSlice.actions;
export const selectSearchTerm = (state) => state.filter.searchTerm;
export default filterSlice.reducer;
