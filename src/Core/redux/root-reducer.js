import { combineReducers } from "redux";
import { productsReducer } from "./products/product.reducer";

export const rootReducer = combineReducers({
  products: productsReducer,
});
