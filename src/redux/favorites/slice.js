import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { getFavorites, toggleFavorites } from './operations';
import getLastKey from '../../helpers/getLastKey';
import { filterLimit } from '../../helpers/constants';
import { filteringArray } from '../../helpers/filteringArray';

const INITIAL_STATE = {
  items: [],
  isLoading: false,
  error: null,
  lastKey: null,
  limit: filterLimit,
  hasMore: true,
  hasFetched: false,
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
      state.hasFetched = false;
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
        state.hasFetched = true;

        state.items = filteringArray([...state.items, ...payload]);
      })
      .addCase(toggleFavorites.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items = filteringArray(payload || []);
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
