import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getFavoritesNannies,
  toggleFavorite,
} from '../../services/favoritesService';
import { get, ref } from 'firebase/database';
import { db } from '../../services/firebaseConfig';
import createNanniesQuery from '../../helpers/createNanniesQuery';

export const getFavorites = createAsyncThunk(
  'favorites/getFavorites',
  async ({ uid }, thunkApi) => {
    const { filter, limit, lastKey, items } = thunkApi.getState().favorites;

    try {
      // const favorites = await getFavoritesNannies(
      //   uid,
      //   filter,
      //   lastKey,
      //   limit,
      //   items
      // );
      // return favorites;

      if (!uid) throw new Error('No uid provided');

      const favRef = ref(db, `users/${uid}/favorites`);

      const nannies = await get(
        createNanniesQuery(favRef, filter, lastKey, limit)
      );
      if (nannies.exists()) {
        let data = [];
        nannies.forEach(childSnapshot => {
          data.push({
            id: childSnapshot.key,
            ...childSnapshot.val(),
          });
        });

        if (
          (filter === 'z-to-a' || filter === 'popular') &&
          items.length > 0 &&
          lastKey
        ) {
          console.log('favorites before data', data);

          data = data.filter(exists => exists.id !== lastKey.id);
          console.log('favorites after data', data);
        }
        return data;
      } else {
        return [];
      }
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
