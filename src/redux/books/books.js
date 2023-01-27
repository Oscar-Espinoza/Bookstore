/* eslint-disable camelcase */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const apiId = 'qO00VEuARfSLWwqDGcKq';
export const baseUrl = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${apiId}/books/`;
const initialState = {
  isLoading: false,
  books: {},
};

export const getBooks = createAsyncThunk('books/getBooks', () => axios.get(baseUrl)
  .then((res) => res.data));

export const removeBook = createAsyncThunk('books/removeBook', (id) => axios.delete(baseUrl + id)
  .then(() => id));

export const addBook = createAsyncThunk('books/addBook', (book) => axios.post(baseUrl, book)
  .then(() => book));

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    setBooks: (state, action) => ({
      ...state,
      ...action.payload,
    }),
  },
  extraReducers: {
    [getBooks.pending]: (state) => ({ ...state, isLoading: true }),
    [getBooks.fulfilled]: (state, action) => ({
      ...state, isLoading: false, books: action.payload,
    }),
    [getBooks.rejected]: (state) => ({ ...state, isLoading: false }),
    [removeBook.fulfilled]: (state, action) => {
      const newState = { ...state };
      delete newState.books[action.payload];
    },
    [addBook.fulfilled]: (state, action) => {
      const newBook = action.payload;
      const {
        category, author, title, item_id,
      } = newBook;
      return {
        ...state,
        books: {
          ...state.books,
          [item_id]: [
            {
              category,
              author,
              title,
            },
          ],
        },
      };
    },
    [addBook.rejected]: (state) => state,
  },
});

export const { setBooks } = booksSlice.actions;

export default booksSlice.reducer;
