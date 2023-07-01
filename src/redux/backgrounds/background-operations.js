import { createAsyncThunk } from '@reduxjs/toolkit';
import { BoardBackGrounds } from 'service/content-service';


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
