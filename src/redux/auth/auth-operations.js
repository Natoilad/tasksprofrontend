import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  currentUser,
  loginUser,
  logoutUser,
  registerUser,
  token,
  updateUser,
  updateUserAvatar,
  updateUserTheme,
} from 'service/auth-service';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const authRegister = createAsyncThunk(
  'auth/register',
  async (credentials, { rejectWithValue }) => {
    try {
      const data = await registerUser(credentials);
      const { email, password } = credentials;

      if (data.status === 'success') {
        const loginData = await loginUser({ email, password });
        token.set(loginData.token);

        toast.success('Registration successful!');
        return loginData;
      }
      return data;
    } catch (error) {
      toast.error(error.response.data.message);
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

      toast.success('Login successful!');
      return data;
    } catch (error) {
      toast.error(error.response.data.message);

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
      toast.success('Logout successful!');
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
      // if (error.response.status === 401) {
      //   const refreshtoken = state.auth.token;
      //   token.set(refreshtoken);
      //   const response = await currentUser();
      //   console.log(response);
      //   return logoutUser();
      // }
      return rejectWithValue(error.message);
    }
  }
);

export const updateTheme = createAsyncThunk(
  'auth/theme',
  async (theme, { rejectWithValue, getState }) => {
    const state = getState();

    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return rejectWithValue('Sorry!Unable to fetch user');
    }

    try {
      token.set(persistedToken);
      await updateUserTheme(theme);
      return theme;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const authUpdateUser = createAsyncThunk(
  'auth/:id',
  async (user, { rejectWithValue }) => {
    try {
      const data = await updateUser(user);

      // if (data.status === 200) {
      //   toast.success('User has been updated successfully!');
      // }

      return data;
    } catch (error) {
      toast.error(error.response.data.message);
      return rejectWithValue(error.data.message);
    }
  }
);

export const authUpdateUserAvatar = createAsyncThunk(
  'auth/avatars',
  async (user, { rejectWithValue }) => {
    try {
      const data = await updateUserAvatar(user);

      // if (data.status === 200) {
      //   toast.success('User has been updated successfully!');
      // }

      return data;
    } catch (error) {
      toast.error(error.response.data.message);
      return rejectWithValue(error.data.message);
    }
  }
);
