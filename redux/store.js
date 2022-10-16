import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from 'redux';
import cartReducer from "./slices/cartSlice";
import productReducer from "./slices/productSlice"
// AsyncStorage replace of local storage
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER, persistReducer, persistStore } from 'redux-persist';


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
  middleware: (defaultMiddleware) =>
    defaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
      immutableCheck: { warnAfter: 128 },
    }),
})
const persistor = persistStore(store)

export {
  store,
  persistor,
}
