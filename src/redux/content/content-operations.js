import { createAsyncThunk } from '@reduxjs/toolkit';
import { BoardList } from 'service/content-service';
import { token } from 'service/auth-service';

export const getBoards = createAsyncThunk(
  'api/getBoards',
  async (_, { rejectWithValue, getState }) => {
    try {
      const tempToken = getState().auth.token;
      if (!tempToken) {
        return rejectWithValue('token is invalid');
      }

      const exam = token.set(tempToken);
      console.log(tempToken);
      console.log(exam);

      const response = await BoardList();
      console.log(response);
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
