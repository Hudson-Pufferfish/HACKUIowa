import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from 'redux';
import cartReducer from "./slices/cartSlice";
import productReducer from "./slices/productSlice"
// AsyncStorage replace of local storage
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer, persistStore } from 'redux-persist';


const rootReducer = combineReducers({
  cart: cartReducer,
  product: productReducer
})
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
})
const persistor = persistStore(store)

export {
  store,
  persistor,
}
