import { createSlice } from '@reduxjs/toolkit';
import { getNannies } from './operations';
import getLastKey from '../../helpers/getLastKey';

const INITIAL_STATE = {
  items: [],
  isLoading: false,
  error: null,
  lastKey: null,
  limit: 3,
  hasMore: true,
  filter: 'all',
};

const nanniesSlice = createSlice({
  name: 'nannies',
  initialState: INITIAL_STATE,
  reducers: {
    setNannyFilter: (state, { payload }) => {
      state.filter = payload;
      state.items = [];
      state.lastKey = null;
      state.hasMore = true;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getNannies.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getNannies.fulfilled, (state, { payload }) => {
        state.isLoading = false;

        if (state.filter === 'z-to-a' || state.filter === 'popular') {
          payload.reverse();
        }

        if (state.filter === 'all' || payload.length < state.limit) {
          state.hasMore = false;
        }

        if (payload.length > 0) {
          const lastItem = payload[payload.length - 1];
          state.lastKey = getLastKey(lastItem, state);
        }

        state.items = [...state.items, ...payload];
      })
      .addCase(getNannies.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const { setNannyFilter } = nanniesSlice.actions;

export const nanniesReducer = nanniesSlice.reducer;
