import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [
    {
      id: 1,
      title: 'The Hunger Games',
      author: 'Suzanne Collins',
    },
    {
      id: 2,
      title: 'Dune',
      author: 'Frank Herbert',
    },
    {
      id: 3,
      title: 'Capital in the Twenty-First Century',
      author: 'Suzanne Collins',
    },
  ],
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBooks(state, action) {
      if (action.payload) {
        state.books.unshift(action.payload);
      }
    },
    deleteBooks(state, action) {
      if (action.payload) {
        const temp = state.books.filter((book) => book.id !== action.payload);
        /* eslint-disable */
        state.books = temp;
      }
    },
  },
});

export const { addBooks, deleteBooks } = booksSlice.actions;
export default booksSlice.reducer;
