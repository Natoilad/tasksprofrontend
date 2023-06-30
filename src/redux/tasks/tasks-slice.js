import { createSlice } from '@reduxjs/toolkit';
import {
  UpdateTask,
  addTasks,
  getTaskByColumnId,
  getTaskById,
  getTasks,
  removeTask,
} from './tasks-operations';

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    tasks: [],
  },
  extraReducers: builder => {
    builder
      .addCase(getTasks.pending)
      .addCase(getTasks.rejected)
      .addCase(getTasks.fulfilled, (state, { payload }) => {
        state.tasks = payload;
      })
      .addCase(getTaskById.pending)
      .addCase(getTaskById.rejected)
      .addCase(getTaskById.fulfilled, (state, { payload }) => {})
      .addCase(getTaskByColumnId.pending)
      .addCase(getTaskByColumnId.rejected)
      .addCase(getTaskByColumnId.fulfilled, (state, { payload }) => {})
      .addCase(addTasks.pending)
      .addCase(addTasks.rejected)
      .addCase(addTasks.fulfilled, (state, { payload }) => {
        state.tasks.push(payload);
      })
      .addCase(removeTask.pending)
      .addCase(removeTask.rejected)
      .addCase(removeTask.fulfilled, (state, { payload }) => {
        const index = state.tasks.findIndex(task => task.id === payload.id);
        state.slice(index, 1);
      })
      .addCase(UpdateTask.pending)
      .addCase(UpdateTask.rejected)
      .addCase(UpdateTask.fulfilled, (state, { payload }) => {
        const index = state.tasks.findIndex(task => task.id === payload.id);
        state.slice(index, 1, payload);
      });
  },
});

export const tasksReducer = tasksSlice.reducer;
