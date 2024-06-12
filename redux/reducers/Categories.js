import { createSlice } from '@reduxjs/toolkit';

import categories from '../../assets/data/categories';
const initialState = {
  categories: categories,
  selectedCategoryId: 1,
};

const Categories = createSlice({
  name: 'categories',
  initialState: initialState,
  reducers: {
    resetToCategoryState: () => {
      return initialState;
    },
    updateCategoryId: (state, action) => {
      state.selectedCategoryId = action.payload;
    },
  },
});

export const { resetToCategoryState, updateCategoryId } = Categories.actions;
export default Categories.reducer;
