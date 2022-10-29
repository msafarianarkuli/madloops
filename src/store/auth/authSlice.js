import { createSlice } from "@reduxjs/toolkit";
import { setItem, clearStorage } from "../../Core/services/storage/storage";

const initialState = {
  user: null,
  token: null,
  storage: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logIn: (state, action) => {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
      state.storage = setItem(
        "user",
        JSON.stringify({
          user,
          token,
        })
      );
    },
    logOut: (state) => {
      state.user = null;
      state.token = null;
      state.storage = clearStorage();
    },
  },
});

export const selectCurrentUser = (state) => state.auth.user;
export const selectToken = (state) => state.auth.token;

export const { logIn, logOut } = authSlice.actions;

export default authSlice.reducer;
