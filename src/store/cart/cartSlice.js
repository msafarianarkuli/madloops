import { createSelector, createSlice } from "@reduxjs/toolkit";

const addCartItem = (cartItems, productToAdd) => {
  console.log(cartItems, "salam", productToAdd);
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem._id === productToAdd?._id
  );
  console.log(existingCartItem);
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem._id === productToAdd?._id
        ? { ...cartItem, quantity: cartItem.quantity }
        : cartItem
    );
  }
  console.log([...cartItems, { ...productToAdd, quantity: 1 }]);
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem._id === cartItemToRemove._id
  );

  if (existingCartItem.quantity === 1) {
    return cartItems.filter(
      (cartItem) => cartItem._id !== cartItemToRemove._id
    );
  }

  return cartItems.map((cartItem) =>
    cartItem._id === cartItemToRemove._id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const initialState = {
  cartItems: [],
  isCartOpen: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const { cartItems, productToAdd } = action.payload;
      console.log(cartItems, productToAdd);
      const newCartItems = addCartItem(cartItems, productToAdd);
      state.cartItems = newCartItems;
    },
    removeItem: (state, action) => {
      const { cartItems, cartItemToRemove } = action.payload;
      const newCartItems = removeCartItem(cartItems, cartItemToRemove);
      state.cartItems = newCartItems;
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

export const selectCartCount = createSelector(selectCartItems, (cartItems) =>
  cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
);

export const selectCartTotalPrice = createSelector(
  selectCartItems,
  (cartItems) => cartItems.reduce((total, cartItem) => total + cartItem.cost, 0)
);

export const { addItem, removeItem, resetItem, setIsCartOpen } =
  cartSlice.actions;

export default cartSlice.reducer;
