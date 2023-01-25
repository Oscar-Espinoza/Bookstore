import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
  status: '',
};

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    add: (state, action) => [...state.categories, action.payload],
    checkStatus: (state) => ({ ...state, status: 'In Construction' }),
  },
});

export const { add, checkStatus } = categoriesSlice.actions;

export default categoriesSlice.reducer;
