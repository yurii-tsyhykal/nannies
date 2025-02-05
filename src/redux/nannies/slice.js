import { createSlice } from '@reduxjs/toolkit';
import { getNannies } from './operations';

const INITIAL_STATE = {
  items: [],
  isLoading: false,
  error: null,
  lastKey: null,
  hasMore: true,
};

function FilteringPayload(payload, state) {
  return payload.filter(
    newItem => !state.items.some(existing => existing.id === newItem.id)
  );
}

const nanniesSlice = createSlice({
  name: 'nannies',
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getNannies.pending, state => {
        // state.items = [];
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getNannies.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        if (payload.length === 0) {
          state.hasMore = false;
          return;
        }
        const newItems = FilteringPayload(payload, state);
        state.items = [...state.items, ...newItems];
        console.log('payload', payload);

        if (payload.length > 0) {
          state.lastKey = payload[payload.length - 1].id;
        }
      })
      .addCase(getNannies.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const nanniesReducer = nanniesSlice.reducer;
