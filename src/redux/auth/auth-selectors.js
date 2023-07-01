export const selectUsers = state => state.auth.user;

export const selectIsRefreshing = state => state.auth.isRefreshing;

export const selectLoggedIn = state => state.auth.isLoggedIn;

export const selectIsLoading = state => state.auth.isLoading;
