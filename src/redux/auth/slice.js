import { createSlice } from '@reduxjs/toolkit';
import { signUp } from './operations';

const INITIAL_STATE = {
  user: null,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(signUp.pending, state => {
        state.user = null;
        state.isLoading = true;
        state.error = null;
      })
      .addCase(signUp.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user = payload;
      })
      .addCase(signUp.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const authReducer = authSlice.reducer;
