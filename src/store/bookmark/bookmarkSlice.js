import {
  createSelector,
  createSlice,
  current,
} from '@reduxjs/toolkit';
import { toastifyToast } from './../../Components/common/Toast/toast';

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
        toastifyToast.warning(
          'این دوره قبلا به لیست علاقه مندی های شما اضافه شده است'
        );
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
