export const selectFavNannies = state => state.favorites.items;
export const selectFavFilter = state => state.favorites.filter;
export const selectFavHasMore = state => state.favorites.hasMore;
export const selectIsLoading = state => state.favorites.isLoading;
export const selectError = state => state.favorites.error;
