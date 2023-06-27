export const selectUsers = state => state.auth.users;

export const selectIsRefreshing = state => state.auth.isRefreshing;

export const selectLoggedIn = state => state.auth.isLoggedIn;

export const selectToken = state => state.auth.token;

export const selectIsLoading = state => state.auth.isLoading;

export const selectError = state => state.auth.error;
