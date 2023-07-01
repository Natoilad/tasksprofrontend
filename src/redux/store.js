import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { authReducer } from './auth/auth-slice';
import { contentReducer } from './content/content-slice';
import { tasksReducer } from './tasks/tasks-slice';
import { bgReducer } from './backgrounds/background-slice';

const persistConfig = {
  key: 'auth',
  storage,
  whiteList: ['token'],
};

const persistReducerUser = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  reducer: {
    auth: persistReducerUser,
    content: contentReducer,
    tasks: tasksReducer,
    bg: bgReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistR = persistStore(store);
