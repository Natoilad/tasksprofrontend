import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  BoardList,
  AddBoard,
  GetById,
  Remove,
  PutUpdate,
  PatchUpdate,
  AddColumn,
  UpdateCol,
  RemoveCol,
  BoardBackGrounds,
} from 'service/content-service';
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
export const addBoards = createAsyncThunk(
  'api/addBoards',
  async (data, thunkAPI) => {
    try {
      const response = await AddBoard(data);
      console.log(response);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const getBoardById = createAsyncThunk(
  'api/getBoardById',
  async (id, thunkAPI) => {
    try {
      const response = await GetById(id);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const removeBoard = createAsyncThunk(
  'api/removeBoard',
  async (id, thunkAPI) => {
    try {
      const response = await Remove(id);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const updateBoard = createAsyncThunk(
  'api/updateBoard',
  async ({ id, data }, thunkAPI) => {
    try {
      const response = await PutUpdate(id, data);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const updateBoardEl = createAsyncThunk(
  'api/updateBoardEl',
  async ({ id, data }, thunkAPI) => {
    try {
      const response = await PatchUpdate(id, data);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const addColumns = createAsyncThunk(
  'api/columns/addColumns',
  async (data, thunkAPI) => {
    const { id: boardId, value } = data;
    try {
      const response = await AddColumn(boardId, value);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const updateColumn = createAsyncThunk(
  'api/columns/updateCol',
  async ({ boardId, columnId, data }, thunkAPI) => {
    try {
      const response = await UpdateCol(boardId, columnId, data);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const removeColumn = createAsyncThunk(
  'api/columns/removeColumn',
  async ({ boardId, columnId, data }, thunkAPI) => {
    try {
      const response = await RemoveCol(boardId, columnId, data);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
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
