export const selectContent = state => state.content.boards;

export const selectCurrentBoard = state => state.content.currentBoard;

export const selectIsLoading = state => state.content.isLoading;

export const selectError = state => state.content.error;

export const selectColumns = state => state.content.boards[0].columns;
