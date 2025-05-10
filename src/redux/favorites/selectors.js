import { createSelector } from '@reduxjs/toolkit';
import { filteringArray } from '../../helpers/filteringArray';

export const selectFavNannies = state => state.favorites.items;
export const selectFavFilter = state => state.favorites.filter;
export const selectFavHasMore = state => state.favorites.hasMore;
export const selectFavIsLoading = state => state.favorites.isLoading;
export const selectFavError = state => state.favorites.error;
export const selectFavHasFetched = state => state.favorites.hasFetched;

const selectFavNanniesItems = state => state.favorites.items;
export const selectIsNannyFavorite = createSelector(
  [selectFavNanniesItems, (state, nannyId) => nannyId],
  (favNannies, nannyId) => favNannies.some(item => item.id === nannyId)
);

export const selectUniqueFavNannies = createSelector(
  [selectFavNannies],
  nannies => filteringArray(nannies)
);
