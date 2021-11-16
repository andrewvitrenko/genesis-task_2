import { configureStore } from '@reduxjs/toolkit';
import appReducer from './reducer';

export const store = configureStore({
  reducer: appReducer,
});

export type AppDispatch = typeof store.dispatch;
