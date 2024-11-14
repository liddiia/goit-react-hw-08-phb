// Селектори
export const selectUsersData = (state) => state.auth.userData;
export const selectUsersDataIsLoading = (state) => state.auth.isLoading;
export const selectUsersDataError = (state) => state.auth.error;
export const selectUsersDataIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectUsersDataIsRefreshing = (state) => state.auth.isRefreshing;
export const selectUsersToken = (state) => state.auth.token; // виправлений селектор
