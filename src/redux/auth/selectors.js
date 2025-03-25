export const selectAuthIsLoading = state => state.auth.isLoading;
export const selectAuthError = state => state.auth.error;
export const selectAuthUser = state => state.auth.user;
export const selectAuthUID = state => state.auth.user?.uid;
export const selectIsAuthenticated = state => state.auth.isAuthenticated;
