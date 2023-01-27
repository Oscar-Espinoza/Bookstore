import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './books/books';
import categoriesReducer from './categories/categories';

const apiId = 'qO00VEuARfSLWwqDGcKq';
export const baseUrl = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${apiId}/books/`;
export const generateID = () => `${Date.now()}_${Math.random().toString(36).substring(2)}`;

const store = configureStore({
  reducer: {
    books: booksReducer,
    categories: categoriesReducer,
  },
});

export default store;
