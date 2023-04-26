import { configureStore } from '@reduxjs/toolkit';
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

import { combineReducers } from 'redux';
// import { contactReducer } from './contacts/contactSlice';
import { filterReducer } from './filter/filterSlice';
import { contactsReducer } from './contacts/slice';
import { authReducer } from './auth/sliceAuth';

import storage from 'redux-persist/lib/storage';
const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const reducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  filter: filterReducer,
  contacts: contactsReducer,
});
export const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
