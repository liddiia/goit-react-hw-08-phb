import { createSlice } from "@reduxjs/toolkit";
import { apiRegisterUser, apiLoginUser, apiGetCurrentUser, apiLogoutUser } from "./operations";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    userData: null,
    isLoading: false,
    error: null,
    token: null,
    isRefreshing: false,
    isLoggedIn: false,
  },
  extraReducers: (builder) =>
    builder
      .addCase(apiRegisterUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(apiRegisterUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLoggedIn = true; // встановлюємо користувача як залогіненого
        state.token = action.payload.token;
        state.userData = action.payload.user;
        state.error = null;
      })
      .addCase(apiRegisterUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(apiLoginUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(apiLoginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLoggedIn = true;
        state.token = action.payload.token;
        state.userData = action.payload.user;
        state.error = null;
      })
      .addCase(apiLoginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(apiGetCurrentUser.pending, (state) => {
        state.isRefreshing = true;
        state.error = null;
      })
      .addCase(apiGetCurrentUser.fulfilled, (state, action) => {
        state.isRefreshing = false;
        state.isLoggedIn = true;
        state.userData = action.payload;
        state.error = null;
      })
      .addCase(apiGetCurrentUser.rejected, (state, action) => {
        state.isRefreshing = false;
        state.error = action.payload;
      })
      .addCase(apiLogoutUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(apiLogoutUser.fulfilled, (state) => {
        state.isLoading = false;
        state.isLoggedIn = false;
        state.userData = null;
        state.token = null;
        state.isRefreshing = false; // оновлення завершено
        state.error = null;
      })
      .addCase(apiLogoutUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export const authReducer = authSlice.reducer;



