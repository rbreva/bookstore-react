import { createSlice } from '@reduxjs/toolkit';

const ADD_BOOK = 'bookstore-react/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore-react/books/REMOVE_BOOK';

const initialState = {
  books: [],
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBooks(state, action) {
      if (ADD_BOOK) {
        state.books.unshift(action.payload);
      }
    },
    deleteBooks(state, action) {
      if (REMOVE_BOOK) {
        state.books.filter((book) => book.id !== action.payload);
      }
    },
  },
});

export const { addBooks, deleteBooks } = booksSlice.actions;
export default booksSlice.reducer;
