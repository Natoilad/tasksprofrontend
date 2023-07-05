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
  SendHelpEmail,
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
      await Remove(id);
      return { id };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const updateBoard = createAsyncThunk(
  'api/updateBoard',
  async ({ boardId, data }, thunkAPI) => {
    try {
      const response = await PutUpdate(boardId, data);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const updateBoardEl = createAsyncThunk(
  'api/updateBoardEl',
  async ({ boardId, data }, thunkAPI) => {
    try {
      const response = await PatchUpdate(boardId, data);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const addColumns = createAsyncThunk(
  'api/columns/addColumns',
  async (data, thunkAPI) => {
    const { boardId, value } = data;
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
  async ({ boardId, columnId, inputValue }, thunkAPI) => {
    try {
      await UpdateCol(boardId, columnId, inputValue);
      return { boardId, columnId, inputValue };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const removeColumn = createAsyncThunk(
  'api/columns/removeColumn',
  async (data, thunkAPI) => {
    const { boardId, columnId } = data;
    try {
      await RemoveCol(boardId, columnId);
      return { boardId, columnId };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const sendEmail = createAsyncThunk(
  'api/help',
  async (email, thunkAPI) => {
    try {
      const response = await SendHelpEmail(email);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);
