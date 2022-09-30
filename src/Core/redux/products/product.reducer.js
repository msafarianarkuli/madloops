import { products_type } from "./product.types";
const PRODUCTS_INITIAL_STATE = {
  products: [],
};

export const productsReducer = (state = PRODUCTS_INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case products_type.SET_PRODUCTS_DATA:
      return { ...state, products: payload };
    default:
      return state;
  }
};
