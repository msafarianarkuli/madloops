import { createSelector, createSlice } from "@reduxjs/toolkit";

const addBookMarkItem = (bookMarkItems, productToAdd) => {
  console.log(bookMarkItems, "salam", productToAdd);
  const existingBookMarkItem = bookMarkItems.find(
    (bookMarkItem) => bookMarkItem._id === productToAdd?._id
  );
  console.log(existingBookMarkItem);
  if (existingBookMarkItem) {
    return bookMarkItems.map((bookMarkItem) =>
      bookMarkItem._id === productToAdd?._id
        ? { ...bookMarkItem, quantity: bookMarkItem.quantity }
        : bookMarkItem
    );
  }
  console.log([...bookMarkItems, { ...productToAdd, quantity: 1 }]);
  return [...bookMarkItems, { ...productToAdd, quantity: 1 }];
};

const removeBookMarkItem = (bookMarkItems, bookMarkItemToRemove) => {
  const existingBookMarkItem = bookMarkItems.find(
    (bookMarkItem) => bookMarkItem._id === bookMarkItemToRemove._id
  );

  if (existingBookMarkItem.quantity === 1) {
    return bookMarkItems.filter(
      (bookMarkItem) => bookMarkItem._id !== bookMarkItemToRemove._id
    );
  }

  return bookMarkItems.map((bookMarkItem) =>
    bookMarkItem._id === bookMarkItemToRemove._id
      ? { ...bookMarkItem, quantity: bookMarkItem.quantity - 1 }
      : bookMarkItem
  );
};

const initialState = {
  bookMarkItems: [],
};

const bookMarkSlice = createSlice({
  name: "bookMark",
  initialState,
  reducers: {
    addBookMark: (state, action) => {
      const { bookMarkItems, productToAdd } = action.payload;
      console.log(bookMarkItems, productToAdd);
      const newBookMarkItems = addBookMarkItem(bookMarkItems, productToAdd);
      state.bookMarkItems.push(newBookMarkItems);
    },
    removeBookMark: (state, action) => {
      const { bookMarkItems, bookMarkItemToRemove } = action.payload;
      const newBookMarkItems = removeBookMarkItem(
        bookMarkItems,
        bookMarkItemToRemove
      );
      state.bookMarkItems = newBookMarkItems;
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
