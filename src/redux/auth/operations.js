import { createAsyncThunk } from '@reduxjs/toolkit';
import { registerNewUser } from '../../services/signUpNewUsers';

export const signUp = createAsyncThunk(
  'auth/signUp',
  async (userData, thunkApi) => {
    try {
      const user = await registerNewUser(userData);
      return user;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
