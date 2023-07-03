import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  UpdateTaskById,
  GetTasksList,
  GetById,
  GetByColumnId,
  AddTask,
  DeleteTask,
  Transfer,
} from 'service/tasks-servise';
export const getTasks = createAsyncThunk(
  '/api/tasks',
  async (data, thunkAPI) => {
    try {
      const response = await GetTasksList();
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const addTasks = createAsyncThunk(
  '/api/addTasks',
  async (data, thunkAPI) => {
    try {
      const response = await AddTask(data);

      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const getTaskById = createAsyncThunk(
  '/api/getTaskById',
  async (id, thunkAPI) => {
    try {
      const response = await GetById(id);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const removeTask = createAsyncThunk(
  '/api/removeTask',
  async (id, thunkAPI) => {
    try {
      await DeleteTask(id);
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const updateTask = createAsyncThunk(
  '/api/updateTask',
  async (data, thunkAPI) => {
    try {
      const response = await UpdateTaskById(data);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const transferTask = createAsyncThunk(
  'api/TransferTask',
  async (data, thunkAPI) => {
    try {
      const response = await Transfer(data);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const getTaskByColumnId = createAsyncThunk(
  '/api/getTaskByColumnId',
  async (id, thunkAPI) => {
    try {
      const response = await GetByColumnId(id);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);
