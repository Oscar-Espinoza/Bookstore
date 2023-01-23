import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [],
};

export const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    addBook: (state, action) => [...state.books, action.payload],
    removeBook: (state, action) => {
      switch (action.type) {
        case 'removeBook':
          return [...state.filter((book) => book.id !== action.payload)];
        default:
          return state;
      }
    },
  },
});

export const { addBook, removeBook } = bookSlice.actions;

export default bookSlice.reducer;
