import { createSlice } from '@reduxjs/toolkit';

const initialState = [{
  category: 'Fiction', title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', progress: 75, chapter: 8,
}, {
  category: 'Science Fiction', title: 'Dune', author: 'Frank Herbert', progress: 50, chapter: 12,
}, {
  category: 'Mystery', title: 'Murder on the Orient Express', author: 'Agatha Christie', progress: 25, chapter: 3,
}];

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => [...state, action.payload],
    removeBook: (state, action) => {
      switch (action.type) {
        case 'books/removeBook': {
          const bookIndex = state.map((book) => book.title).indexOf(action.payload);
          const newState = state.slice(0, bookIndex).concat(state.slice(bookIndex + 1));
          return newState;
        }
        default:
          return state;
      }
    },
  },
});

export const { addBook, removeBook } = booksSlice.actions;

export default booksSlice.reducer;
