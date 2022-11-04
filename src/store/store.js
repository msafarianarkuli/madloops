import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice";
import { apiSlice } from "./../Core/services/api/apiSlice";
import storage from "redux-persist/lib/storage";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import cartReducer from "./cart/cartSlice";
import bookMarkReducer from "./bookmark/bookmarkSlice";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["auth", "cart", "bookMark"],
};

const authPersist = persistReducer(persistConfig, authReducer);
const cartPersist = persistReducer(persistConfig, cartReducer);
const bookMarkPersist = persistReducer(persistConfig, bookMarkReducer);

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authPersist,
    cart: cartPersist,
    bookMark: bookMarkPersist,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(apiSlice.middleware),
  devTools: process.env.NODE_ENV === "development",
});

export const persistor = persistStore(store);
