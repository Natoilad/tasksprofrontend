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

// const initialState = {
//   title: '',
//   icon: '',
//   background: '',
//   owner: {},
//   columns: [],
//   isLoading: false,
//   error: null,
// };

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
    // background: [],
    boards: [
      {
        title: 'q2',
        icon: '12',
        background: '',
        owner: {},
        columns: [],
      },
    ],
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
        // state.background = payload;
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
        const index = state.boards.findIndex(board => board.id === payload.id);
        state.contacts.splice(index, 1);
      })
      .addCase(updateBoard.pending, handleIfPending)
      .addCase(updateBoard.rejected, handleIfReject)
      .addCase(updateBoard.fulfilled, (state, { payload }) => {
        const index = state.boards.findIndex(board => board.id === payload.id);
        state.contacts.splice(index, 1, payload);
      })
      .addCase(updateBoardEl.pending, handleIfPending)
      .addCase(updateBoardEl.rejected, handleIfReject)
      .addCase(updateBoardEl.fulfilled, (state, { payload }) => {
        // const index = state.boards.findIndex(board => board.id === payload.id);
        // state.contacts.splice(index, 1, payload);
      })
      .addCase(addColumns.pending, handleIfPending)
      .addCase(addColumns.rejected, handleIfReject)
      .addCase(addColumns.fulfilled, (state, { payload }) => {
        // state.boards.columns.push(payload);
      })
      .addCase(removeColumn.pending, handleIfPending)
      .addCase(removeColumn.rejected, handleIfReject)
      .addCase(removeColumn.fulfilled, (state, { payload }) => {
        const index = state.boards.columns.findIndex(
          column => column.id === payload.id
        );
        state.columns.splice(index, 1);
      })
      .addCase(updateColumn.pending, handleIfPending)
      .addCase(updateColumn.rejected, handleIfReject)
      .addCase(updateColumn.fulfilled, (state, { payload }) => {
        const index = state.boards.columns.findIndex(
          column => column.id === payload.id
        );
        state.columns.splice(index, 1);
      });
  },
});

export const contentReducer = contentSlice.reducer;

// import { createSlice } from '@reduxjs/toolkit';
// import {
//   addContactsThunk,
//   delContactsThunk,
//   getContactsThunk,
// } from './contactsThunk';

// const handlePaending = state => {
//   state.isLoading = true;
// };

// const handleReject = (state, { payload }) => {
//   state.error = payload;
// };

// const sliceContact = createSlice({
//   name: 'contacts',
//   initialState: {
//     items: [
//       {
//         createdAt: '2023-04-05T23:25:30.677Z',
//         name: 'Dolores Morar',
//         phone: '(570) 817-2230',
//         id: '29',
//       },
//     ],
//     isLoading: false,
//     error: null,
//   },
//   extraReducers: builder => {
//     builder
//       .addCase(getContactsThunk.pending, handlePaending)
//       .addCase(getContactsThunk.rejected, handleReject)
//       .addCase(getContactsThunk.fulfilled, (state, { payload }) => {
//         state.items = payload;
//       })
//       .addCase(addContactsThunk.pending, handlePaending)
//       .addCase(addContactsThunk.rejected, handleReject)
//       .addCase(addContactsThunk.fulfilled, (state, { payload }) => {
//         state.items = [payload, ...state.items];
//       })
//       .addCase(delContactsThunk.pending, handlePaending)
//       .addCase(delContactsThunk.rejected, handleReject)
//       .addCase(delContactsThunk.fulfilled, (state, { payload }) => {
//         state.items = state.items.filter(item => item.id !== payload.id);
//       });
//   },
// });

// export const { addContactsActions, delContactsActions } = sliceContact.actions;
// export const contactsReducer = sliceContact.reducer;
