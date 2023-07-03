import { createSlice } from '@reduxjs/toolkit';
import {
  addTasks,
  getTaskByColumnId,
  getTaskById,
  getTasks,
  removeTask,
  updateTask,
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
        const index = state.tasks.findIndex(task => task._id === payload);
        state.tasks.splice(index, 1);
      })
      .addCase(updateTask.pending)
      .addCase(updateTask.rejected)
      .addCase(updateTask.fulfilled, (state, { payload }) => {
        const index = state.tasks.findIndex(task => task._id === payload._id);
        state.tasks.splice(index, 1, payload);
      });
  },
});

export const tasksReducer = tasksSlice.reducer;
