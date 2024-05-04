import { configureStore } from '@reduxjs/toolkit';
import accountReducer from "./accountSlice";
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const store = configureStore({
  reducer: {
    account: persistReducer(persistConfig, accountReducer),
  },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  });

persistStore(store);

export default store;