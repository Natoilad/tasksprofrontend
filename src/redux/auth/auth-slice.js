import {
  authLogin,
  authLogout,
  authRefresh,
  authRegister,
  authUpdateUser,
  authUpdateUserAvatar,
  updateTheme,
} from './auth-operations';

const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  user: null,
  token: null,
  isLoading: false,
  error: null,
  isRefreshing: false,
  isLoggedIn: false,
};

const handleIfPending = state => {
  state.isLoading = true;
};

const handleIfReject = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(authRegister.pending, handleIfPending)
      .addCase(authRegister.rejected, handleIfReject)
      .addCase(authRegister.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.isLoggedIn = true;
        state.isLoading = false;
        state.error = null;
        state.token = payload.token;
      })
      .addCase(authLogin.pending, handleIfPending)
      .addCase(authLogin.rejected, handleIfReject)
      .addCase(authLogin.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(authLogout.pending, handleIfPending)
      .addCase(authLogout.rejected, handleIfReject)
      .addCase(authLogout.fulfilled, state => {
        state.user = null;
        state.token = null;
        state.isRefreshing = false;
        state.isLoggedIn = false;
        state.isLoading = false;
      })
      .addCase(authRefresh.pending, (state, { payload }) => {
        state.isRefreshing = true;
        state.isLoading = true;
      })
      .addCase(authRefresh.rejected, (state, { payload }) => {
        state.isRefreshing = false;
        state.isLoading = false;
      })
      .addCase(authRefresh.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.isLoading = false;
      })
      .addCase(updateTheme.fulfilled, (state, { payload }) => {
        state.user.theme = payload;
      })
      .addCase(authUpdateUser.pending, handleIfPending)
      .addCase(authUpdateUser.rejected, handleIfReject)
      .addCase(authUpdateUser.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isLoading = false;
        console.log(state.user);
      })
      .addCase(authUpdateUserAvatar.pending, handleIfPending)
      .addCase(authUpdateUserAvatar.rejected, handleIfReject)
      .addCase(authUpdateUserAvatar.fulfilled, (state, { payload }) => {
        state.userAvatar = payload;
        state.isLoading = false;
        console.log(state.user);
      });
  },
});

export const authReducer = authSlice.reducer;
