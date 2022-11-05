import {
  createSelector,
  createSlice,
  current,
} from '@reduxjs/toolkit';

const initialState = {
  bookMarkItems: [],
};

const bookMarkSlice = createSlice({
  name: 'bookMark',
  initialState,
  reducers: {
    addBookMark: (state, action) => {
      const existingBookMarkItem = state.bookMarkItems.find(
        (bookMarkItem) => bookMarkItem._id === action.payload?._id
      );
      if (existingBookMarkItem) {
        alert('از قبل وجود دارد');
      }
      state.bookMarkItems.push(action.payload);
    },
    removeBookMark: (state, action) => {
      state.bookMarkItems = state.bookMarkItems.filter(
        (item) => item._id !== action.payload
      );
    },
  },
});

const selectBookMarkReducer = (state) => state.bookMark;

export const selectBookMarkItems = createSelector(
  selectBookMarkReducer,
  (bookMark) => bookMark.bookMarkItems
);

export const { addBookMark, removeBookMark } = bookMarkSlice.actions;

export default bookMarkSlice.reducer;
