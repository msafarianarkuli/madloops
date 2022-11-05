import { createSelector, createSlice } from "@reduxjs/toolkit";
import { toastifyToast } from "./../../Components/common/Toast/toast";

// const addCartItem = (cartItems, productToAdd) => {
//   const existingCartItem = cartItems.find(
//     (cartItem) => cartItem._id === productToAdd?._id
//   );

//   if (existingCartItem) {
//     return cartItems.map((cartItem) =>
//       cartItem._id === productToAdd?._id
//         ? { ...cartItem, quantity: cartItem.quantity }
//         : cartItem
//     );
//   }
//   console.log([...cartItems, { ...productToAdd, quantity: 1 }]);
//   return [...cartItems, { ...productToAdd, quantity: 1 }];
// };

// const removeCartItem = (cartItems, cartItemToRemove) => {
//   const existingCartItem = cartItems.find(
//     (cartItem) => cartItem._id === cartItemToRemove._id
//   );

//   if (existingCartItem.quantity === 1) {
//     return cartItems.filter(
//       (cartItem) => cartItem._id !== cartItemToRemove._id
//     );
//   }

//   return cartItems.map((cartItem) =>
//     cartItem._id === cartItemToRemove._id
//       ? { ...cartItem, quantity: cartItem.quantity - 1 }
//       : cartItem
//   );
// };

const initialState = {
  cartItems: [],
  isCartOpen: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const existingCartItem = state.cartItems.find(
        (cartItem) => cartItem._id === action.payload?._id
      );
      if (existingCartItem) {
        toastifyToast.warning("دوره از قبل در سبد خرید شما موجود است!");
      } else {
        state.cartItems.push(action.payload);
      }
    },
    removeItem: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item._id !== action.payload
      );
    },
    resetItem: (state) => {
      state.cartItems = [];
    },
    setIsCartOpen: (state, action) => {
      state.isCartOpen = action.payload;
    },
  },
});

const selectCartReducer = (state) => state.cart;

export const selectIsCartOpen = createSelector(
  selectCartReducer,
  (cart) => cart.isCartOpen
);

export const selectCartItems = createSelector(
  selectCartReducer,
  (cart) => cart.cartItems
);

export const selectCartCount = createSelector(
  selectCartItems,
  (cartItems) => cartItems.length
);

export const selectCartTotalPrice = createSelector(
  selectCartItems,
  (cartItems) => cartItems.reduce((total, cartItem) => total + cartItem.cost, 0)
);

export const { addItem, removeItem, resetItem, setIsCartOpen } =
  cartSlice.actions;

export default cartSlice.reducer;
