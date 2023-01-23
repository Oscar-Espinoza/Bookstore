import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
};

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    add: (state, action) => [state.categories, action.payload],
    remove: (state, action) => [...state.filter((categories) => categories.id !== action.payload)],
  },
});

export const { add, remove } = categoriesSlice.actions;

export default categoriesSlice.reducer;
