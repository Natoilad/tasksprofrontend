import {
  addBoards,
  addColumns,
  getBoardById,
  getBoards,
  removeBoard,
  removeColumn,
  updateBoard,
  updateBoardEl,
  updateColumn,
} from './content-operations';
const { createSlice } = require('@reduxjs/toolkit');

const handleIfPending = state => {
  state.isLoading = true;
};

const handleIfReject = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const contentSlice = createSlice({
  name: 'content',
  initialState: {
    boards: [],
    currentBoard: {},
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(getBoards.pending, handleIfPending)
      .addCase(getBoards.rejected, handleIfReject)
      .addCase(getBoards.fulfilled, (state, { payload }) => {
        state.boards = payload;
      })

      .addCase(addBoards.pending, handleIfPending)
      .addCase(addBoards.rejected, handleIfReject)
      .addCase(addBoards.fulfilled, (state, { payload }) => {
        state.boards.push(payload);
      })
      .addCase(getBoardById.pending, handleIfPending)
      .addCase(getBoardById.rejected, handleIfReject)
      .addCase(getBoardById.fulfilled, (state, { payload }) => {
        state.currentBoard = payload;
      })
      .addCase(removeBoard.pending, handleIfPending)
      .addCase(removeBoard.rejected, handleIfReject)
      .addCase(removeBoard.fulfilled, (state, { payload }) => {
        const index = state.boards.findIndex(board => board._id === payload.id);
        state.boards.splice(index, 1);
      })
      .addCase(updateBoard.pending, handleIfPending)
      .addCase(updateBoard.rejected, handleIfReject)
      .addCase(updateBoard.fulfilled, (state, { payload }) => {
        const index = state.boards.findIndex(
          board => board._id === payload._id
        );
        state.boards[index] = payload;
      })
      .addCase(updateBoardEl.pending, handleIfPending)
      .addCase(updateBoardEl.rejected, handleIfReject)
      .addCase(updateBoardEl.fulfilled, (state, { payload }) => {
        const index = state.boards.findIndex(
          board => board._id === payload._id
        );
        state.boards[index] = payload;
      })
      .addCase(addColumns.pending, handleIfPending)
      .addCase(addColumns.rejected, handleIfReject)
      .addCase(addColumns.fulfilled, (state, { payload }) => {
        const index = state.boards.findIndex(
          board => board._id === payload._id
        );
        const [last] = payload.columns.slice(-1);
        state.boards[index].columns.push(last);
      })
      .addCase(removeColumn.pending, handleIfPending)
      .addCase(removeColumn.rejected, handleIfReject)
      .addCase(removeColumn.fulfilled, (state, { payload }) => {
        const index = state.boards.findIndex(
          board => board._id === payload.boardId
        );
        const columnIndex = state.boards[index].columns.findIndex(
          column => column._id === payload.columnId
        );
        state.boards[index].columns.splice(columnIndex, 1);
      })
      .addCase(updateColumn.pending, handleIfPending)
      .addCase(updateColumn.rejected, handleIfReject)
      .addCase(updateColumn.fulfilled, (state, { payload }) => {
        const index = state.boards.findIndex(
          board => board._id === payload.boardId
        );
        const columnIndex = state.boards[index].columns.findIndex(
          column => column._id === payload.columnId
        );
        state.boards[index].columns[columnIndex].title = payload.inputValue;
      });
  },
});

export const contentReducer = contentSlice.reducer;
