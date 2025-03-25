import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getFavoritesNannies,
  toggleFavorite,
} from '../../services/favoritesService';

export const getFavorites = createAsyncThunk(
  'favorites/getFavorites',
  async ({ uid }, thunkApi) => {
    const { filter, limit, lastKey, items } = thunkApi.getState().favorites;
    try {
      const favorites = await getFavoritesNannies(
        uid,
        filter,
        lastKey,
        limit,
        items
      );
      return favorites;
    } catch (error) {
      console.log(error.message);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const toggleFavorites = createAsyncThunk(
  'favorites/toggleFavorites',
  async ({ uid, nanny }, thunkApi) => {
    try {
      const updateFavorites = await toggleFavorite(uid, nanny);
      return updateFavorites;
    } catch (error) {
      console.log(error);
      thunkApi.rejectWithValue(error.message);
    }
  }
);
