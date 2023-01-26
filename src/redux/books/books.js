import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      const newBook = action.payload;
      const { category, author, title } = newBook;
      return {
        ...state,
        [action.payload.item_id]: [
          {
            category,
            author,
            title,
          },
        ],
      };
    },
    setBooks: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    removeBook: (state, action) => {
      switch (action.type) {
        case 'books/removeBook': {
          const newState = { ...state };
          delete newState[action.payload];
          return newState;
        }
        default:
          return state;
      }
    },
  },
});

export const { addBook, removeBook, setBooks } = booksSlice.actions;

export default booksSlice.reducer;
