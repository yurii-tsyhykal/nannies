export const selectNannies = state => state.nannies.items;
export const selectIsLoading = state => state.nannies.isLoading;
export const selectError = state => state.nannies.error;
export const selectLastKey = state => state.nannies.lastKey;
export const selectHasMore = state => state.nannies.hasMore;
export const selectFilter = state => state.nannies.filter;