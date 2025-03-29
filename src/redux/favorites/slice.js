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
        
        console.log('state.lastkey before', state.lastKey);
        if (payload.length > 0) {
          const lastItem = payload[payload.length - 1];
          state.lastKey = getLastKey(lastItem, state);
        }

        state.items = [...state.items, ...payload];
        console.log('state.lastkey after', state.lastKey);
        console.log(state.items.length);
        
      })
      .addCase(toggleFavorites.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items = payload;
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
export const { setFavFilter } = favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;
