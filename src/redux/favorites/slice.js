import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { getFavorites, toggleFavorites } from './operations';
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

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: INITIAL_STATE,
  reducers: {
    setFavFilter: (state, { payload }) => {
      state.filter = payload;
      state.items = [];
      state.lastKey = null;
      state.hasMore = true;
    },
    clearFavState: () => INITIAL_STATE,
  },
  extraReducers: builder =>
    builder
      .addCase(getFavorites.fulfilled, (state, { payload }) => {
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
        console.log('state.lastkey', state.lastKey);
        // console.log('payload', payload);

        state.items = [...state.items, ...payload];
        // console.log('state.items', state.items);
      })
      .addCase(toggleFavorites.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items = payload;
        console.log('toggle');
        console.log(state.items);
      })
      .addMatcher(
        isAnyOf(getFavorites.pending, toggleFavorites.pending),
        state => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(getFavorites.rejected, toggleFavorites.rejected),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        }
      ),
});

export const { setFavFilter, clearFavState } = favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;
