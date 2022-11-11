import { createSlice } from '@reduxjs/toolkit';

const CHECK = 'bookstore/categories/CHECK';

const initialState = {
  categories: [],
};

const categories = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    checkCategories(state, action) {
      if (action.payload === CHECK) {
        <div>Under construction</div>;
      }
    },
  },
});

export const { addCategories } = categories.actions;
export default categories.reducer;
