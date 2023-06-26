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
      return rejectWithValue(error.message);
    }
  }
);

export const authLogin = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const data = await loginUser(credentials);
      token.set(data.token);
      console.log(data);
      return data;
    } catch (error) {
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

// export const authRefresh = createAsyncThunk(
//   'auth/current',
//   async (_, { rejectWithValue, getState }) => {
//     try {
//       const sessionToken = getState().auth.token;
//       if (!sessionToken) {
//         return rejectWithValue('Please Login');
//       }
//       token.set(sessionToken);
//       const data = await currentUser();
//       return data.data;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

export const authRefresh = createAsyncThunk(
  'auth/current',
  async (_, { rejectWithValue, getState }) => {
    const state = getState();
    const persistedToken = state.auth.token;
    console.log(persistedToken);
    if (persistedToken === null) {
      return rejectWithValue('Sorry!Unable to fetch user');
    }
    try {
      token.set(persistedToken);
      const data = await currentUser();
      console.log(persistedToken);
      console.log(token);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
