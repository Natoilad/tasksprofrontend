import {
  authLogin,
  authLogout,
  authRefresh,
  authRegister,
} from './auth-operations';

const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  user: null,
  token: null,
  isLoading: false,
  error: null,
  isRefreeshing: false,
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
        state.token = payload.token;
        state.isLoading = false;
        state.error = null;
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
        state.token = '';
        state.user = null;
        state.isLoggedIn = false;
      })
      .addCase(authRefresh.pending, (state, { payload }) => {
        state.isRefreshing = true;
      })
      .addCase(authRefresh.rejected, (state, { payload }) => {
        state.isRefreshing = false;
      })
      .addCase(authRefresh.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isLoggedIn = true;
        state.isRefreeshing = false;
      });
  },
});

export const authReducer = authSlice.reducer;
