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
    newItem => !state.items.some(exist => exist.id === newItem.id)
  );
}

const nanniesSlice = createSlice({
  name: 'nannies',
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getNannies.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getNannies.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        if (payload.length === 0) {
          state.hasMore = false;
          return;
        }
        console.log('payload', payload);
        // const newItems = FilteringPayload(payload, state);
        const newNannies = payload.filter(nanny => nanny != null);
        state.items = [...state.items, ...newNannies];

        if (payload.length > 0) {
          state.lastKey = payload[payload.length - 1].name[0];
          console.log('lastKey', state.lastKey);
        }
      })
      .addCase(getNannies.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const nanniesReducer = nanniesSlice.reducer;
