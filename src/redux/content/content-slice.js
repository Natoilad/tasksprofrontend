import { getBoards } from './content-operations';
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
    boards: [
      {
        title: 'q2',
        icon: '12',
        background: '',
        owner: {},
        columns: [],
      },
    ],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(getBoards.pending, handleIfPending)
      .addCase(getBoards.rejected, handleIfReject)
      .addCase(getBoards.fulfilled, (state, { payload }) => {
        state.boards = payload;
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
