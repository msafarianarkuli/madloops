import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    products: {
      reducer(state, action) {
        state.products.push(action.payload);
      },
    },
  },
});

export const productsSelector = (state) => state.products;

export default productSlice.reducer;
