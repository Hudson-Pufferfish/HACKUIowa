// reducers func
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";

export const store = configureStore({
  reducer: cartReducer,
  devTools: process.env.NODE_ENV !== 'production',
})