import { createAsyncThunk } from '@reduxjs/toolkit';
import { db } from '../../services/firebaseConfig';
import { get, ref } from 'firebase/database';
import createNanniesQuery from '../../helpers/createNanniesQuery';

export const getNannies = createAsyncThunk(
  'nannies/getAll',
  async (_, thunkApi) => {
    const { filter, limit, lastKey, items } = thunkApi.getState().nannies;
    try {
      console.log('last key', lastKey);

      const nanniesRef = ref(db, '/nannies');
      const nannies = await get(
        createNanniesQuery(nanniesRef, filter, lastKey, limit)
      );
      if (nannies.exists()) {
        let nanniesArray = [];
        nannies.forEach(childSnapshot => {
          nanniesArray.push({
            id: childSnapshot.key,
            ...childSnapshot.val(),
          });
        });

        if (
          (filter === 'z-to-a' || filter === 'popular') &&
          items.length > 0 &&
          lastKey
        ) {
          console.log('filter yes', nanniesArray);
          nanniesArray = nanniesArray.filter(
            exists => exists.id !== lastKey.id
          );
        }
        return nanniesArray;
      } else {
        return [];
      }
    } catch (error) {
      console.log('error', thunkApi.rejectWithValue(error.message));

      return thunkApi.rejectWithValue(error.message);
    }
  }
);
