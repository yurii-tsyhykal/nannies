import { configureStore } from '@reduxjs/toolkit';
import { nanniesReducer } from './nannies/slice';
import { authReducer } from './auth/slice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    nannies: nanniesReducer,
  },
});
