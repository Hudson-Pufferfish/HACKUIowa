import { createSlice } from "@reduxjs/toolkit";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { isEmpty } from 'lodash';
import { getInitialItem, getItemInfo } from "../asyncThunk/cartAsyncThunk";

const initialState = {
  cartItems: [],
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      if ((state.cartItems)&&!isEmpty(state.cartItems)) {
        const existingIndex = state.cartItems.findIndex(
          (item) => item.id === action.payload.id
        );
        if (existingIndex >= 0) {
          state.cartItems[existingIndex] = {
            ...state.cartItems[existingIndex],
            cartQuantity: state.cartItems[existingIndex].cartQuantity + 1,
          };
          state.cartTotalAmount += state.cartItems[existingIndex].carbon;
        } else {
          let tempProductItem = { ...action.payload, cartQuantity: 1 };
          state.cartItems.push(tempProductItem);
          state.cartTotalAmount += action.payload.carbon;
        }
      } else {
        state.cartItems = [{...action.payload, cartQuantity: 1 }];
        state.cartTotalAmount = action.payload.carbon;
      }
      AsyncStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    decreaseCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload
      );
      if ((state.cartItems[itemIndex])&&!isEmpty(state.cartItems[itemIndex])) {
        if (state.cartItems[itemIndex].cartQuantity > 1) {
          state.cartItems[itemIndex].cartQuantity -= 1;
          state.cartTotalAmount -= state.cartItems[itemIndex].carbon;
        } else if (state.cartItems[itemIndex].cartQuantity === 1) {
          const nextCartItems = state.cartItems.filter(
            (item) => item.id !== action.payload
          );
          state.cartItems = nextCartItems;
        }
      } else {
        alert("Item not in your cart!");
      }
      AsyncStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    removeFromCart(state, action) {
      state.cartItems.map((cartItem) => {
        if (cartItem.id === action.payload) {
          const nextCartItems = state.cartItems.filter(
            (item) => item.id !== cartItem.id
          );
          state.cartItems = nextCartItems;
        }
        AsyncStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      });
    },
    clearCart(state) {
      return initialState;
    },
  },
});

export const { addToCart, decreaseCart, removeFromCart, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;