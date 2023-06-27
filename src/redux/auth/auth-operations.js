import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  currentUser,
  loginUser,
  logoutUser,
  registerUser,
  token,
} from 'service/auth-service';

export const authRegister = createAsyncThunk(
  'auth/register',
  async (credentials, { rejectWithValue }) => {
    try {
      const data = await registerUser(credentials);
      const { email, password } = credentials;

      if (data.status === 'success') {
        const loginData = await loginUser({ email, password });
        token.set(loginData.token);
        return loginData;
      }
      return data;
    } catch (error) {
      console.log(error.response.data.message);
      return rejectWithValue(error.data.message);
    }
  }
);

export const authLogin = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const data = await loginUser(credentials);
      token.set(data.token);
      return data;
    } catch (error) {
      console.log(error.response.data.message);
      return rejectWithValue(error.message);
    }
  }
);

export const authLogout = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      await logoutUser();
      token.unSet();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const authRefresh = createAsyncThunk(
  'auth/current',
  async (_, { rejectWithValue, getState }) => {
    const state = getState();
    const persistedToken = state.auth.token;
    if (persistedToken === null) {
      return rejectWithValue('Sorry!Unable to fetch user');
    }
    try {
      token.set(persistedToken);
      const data = await currentUser();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
