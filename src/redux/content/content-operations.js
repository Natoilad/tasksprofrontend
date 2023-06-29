import { createAsyncThunk } from '@reduxjs/toolkit';
import { BoardList, BoardBackGrounds } from 'service/content-service';
import { token } from 'service/auth-service';

export const getBoards = createAsyncThunk(
  'api/getBoards',
  async (_, { rejectWithValue, getState }) => {
    try {
      const tempToken = getState().auth.token;
      if (!tempToken) {
        return rejectWithValue('token is invalid');
      }
      token.set(tempToken);
      const response = await BoardList();
      return response;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const getBackGrounds = createAsyncThunk(
  'api/backgrounds',
  async (_, { rejectWithValue }) => {
    try {
      const response = await BoardBackGrounds();
      console.log(response);
      return response;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
