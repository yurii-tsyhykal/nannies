import { configureStore } from '@reduxjs/toolkit';
import { nanniesReducer } from './nannies/slice';

export const store = configureStore({
  reducer: {
    nannies: nanniesReducer,
  },
});
