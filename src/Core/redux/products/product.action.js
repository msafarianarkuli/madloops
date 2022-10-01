import { createAction } from "./../../utils/reducer.utils";
import { products_type } from "./product.types";

export const setProducts = (products) => {
  createAction(products_type.SET_PRODUCTS_DATA, products);
};
