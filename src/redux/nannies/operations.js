import { createAsyncThunk } from '@reduxjs/toolkit';
import { db } from '../../services/firebaseConfig';
import {
  endAt,
  get,
  limitToFirst,
  orderByChild,
  orderByKey,
  query,
  ref,
  startAt,
} from 'firebase/database';

export const getNannies = createAsyncThunk(
  'nannies/getAll',
  async ({ limit, filter }, thunkApi) => {
    const {startKey} = thunkApi.getState().nannies;
    console.log('filter', startKey);

    try {
      const nanniesRef = ref(db, '/');
      let q;
      if (startKey || filter) {
        q = query(
          nanniesRef,
          orderByChild(filter),
          startKey ? startAt(String(startKey)) : startAt('A'),
          endAt('Z\uf8ff'),
          limitToFirst(limit)
        );
      } else {
        q = query(nanniesRef, orderByKey(), limitToFirst(limit));
      }
      const nannies = await get(q);
      if (nannies.exists()) {
        const data = nannies.val();
        console.table('data', data);

        let nanniesArray = Array.isArray(data)
          ? data
          : Object.entries(data).map(([id, value]) => ({
              id,
              ...value,
            }));
        return nanniesArray;
      } else {
        return [];
      }
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
