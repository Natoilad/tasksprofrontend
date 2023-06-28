import { getBoards } from './content-operations';
const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  title: '',
  icon: '',
  background: '',
  owner: {},
  columns: [],
  isLoading: false,
  error: null,
};

const handleIfPending = state => {
  state.isLoading = true;
};

const handleIfReject = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const contentSlice = createSlice({
  name: 'content',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getBoards.pending, handleIfPending)
      .addCase(getBoards.rejected, handleIfReject)
      .addCase(getBoards.fulfilled, (state, { payload }) => {
        state.title = payload.title;
        state.icon = payload.icon;
        state.background = payload.background;
        state.owner = payload.owner;
        state.columns = payload.columns;
        state.isLoading = false;
        state.error = null;
      });
  },
});

export const contentReducer = contentSlice.reducer;
