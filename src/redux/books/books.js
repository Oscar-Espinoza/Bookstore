import { createSlice } from '@reduxjs/toolkit';

const initialState = [{
  category: 'Fiction', title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', progress: 75, chapter: 8,
}, {
  category: 'Science Fiction', title: 'Dune', author: 'Frank Herbert', progress: 50, chapter: 12,
}, {
  category: 'Mystery', title: 'Murder on the Orient Express', author: 'Agatha Christie', progress: 25, chapter: 3,
}];

export const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    addBook: (state, action) => [...state.books, action.payload],
    removeBook: (state, action) => {
      switch (action.type) {
        case 'removeBook':
          return state.slice(0, state.indexOf(action.payload))
            .concat(state.slice(state.indexOf(action.payload) + 1));
        default:
          return state;
      }
    },
  },
});

export const { addBook, removeBook } = bookSlice.actions;

export default bookSlice.reducer;
