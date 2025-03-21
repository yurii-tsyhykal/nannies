import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { signIn, signUp } from './operations';

const INITIAL_STATE = {
  user: null,
  isLoading: false,
  error: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: INITIAL_STATE,
  reducers: {
    setUser(state, { payload }) {
      state.user = payload;
      state.isAuthenticated = true;
    },
    clearUser(state) {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(signUp.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user = payload;
      })
      .addCase(signIn.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user = payload;
        state.isAuthenticated = true;
      })
      .addMatcher(isAnyOf(signUp.pending, signIn.pending), state => {
        state.user = null;
        state.isLoading = true;
        state.error = null;
      })
      .addMatcher(
        isAnyOf(signUp.rejected, signIn.rejected),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        }
      );
  },
});

export const { setUser, clearUser } = authSlice.actions;
export const authReducer = authSlice.reducer;
