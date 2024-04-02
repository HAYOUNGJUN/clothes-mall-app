import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import productReducter from './productSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    product: productReducter,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
