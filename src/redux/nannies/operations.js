import { createAsyncThunk } from '@reduxjs/toolkit';
import { db } from '../../services/firebaseConfig';
import {
  get,
  limitToFirst,
  orderByKey,
  query,
  ref,
  startAt,
} from 'firebase/database';

export const getNannies = createAsyncThunk(
  'nannies/getAll',
  async ({ startKey, limit = 3 }, thunkApi) => {
    try {
      const nanniesRef = ref(db, '/');
      let q;
      if (startKey) {
        q = query(
          nanniesRef,
          orderByKey(),
          startAt(String(startKey)),
          limitToFirst(limit)
        );
      } else {
        q = query(nanniesRef, orderByKey(), limitToFirst(limit));
      }
      const nannies = await get(q);
      if (nannies.exists()) {
        const data = nannies.val();
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
