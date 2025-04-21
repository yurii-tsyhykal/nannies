import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { logOut, signIn, signUp } from './operations';

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
    clearAuthError(state) {
      state.error = null;
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
      .addCase(logOut.fulfilled, state => {
        state.isLoading = false;
      })
      .addMatcher(
        isAnyOf(signUp.pending, signIn.pending, logOut.pending),
        state => {
          state.user = null;
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(signUp.rejected, signIn.rejected, logOut.rejected),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        }
      );
  },
});

export const { setUser, clearUser, clearAuthError } = authSlice.actions;
export const authReducer = authSlice.reducer;
