import { createAsyncThunk } from '@reduxjs/toolkit';
import { registerNewUser } from '../../services/registerNewUser';
import { authLogInUser } from '../../services/authLogInUser';
import { mapAuthErrorCodeToMessage } from '../../helpers/mapAuthErrorCodeToMessage';
import { logOutUser } from '../../services/logOutUser';
import { clearFavState } from '../favorites/slice';

export const signUp = createAsyncThunk(
  'auth/signUp',
  async (userData, thunkApi) => {
    try {
      const user = await registerNewUser(userData);
      return user;
    } catch (error) {
      const message = mapAuthErrorCodeToMessage(error);
      return thunkApi.rejectWithValue(message);
    }
  }
);

export const signIn = createAsyncThunk(
  'auth/logIn',
  async (userData, thunkApi) => {
    try {
      const user = await authLogInUser(userData);
      console.log('thunk user', userData);
      return user;
    } catch (error) {
      const message = mapAuthErrorCodeToMessage(error);
      return thunkApi.rejectWithValue(message);
    }
  }
);

export const logOut = createAsyncThunk('auth/logOut', async (_, thunkApi) => {
  try {
    await logOutUser();
    thunkApi.dispatch(clearFavState());
  } catch (error) {
    const message = mapAuthErrorCodeToMessage(error);
    return thunkApi.rejectWithValue(message || 'Logout failed');
  }
});
