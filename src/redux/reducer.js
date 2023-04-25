import { combineReducers } from 'redux';
// import { contactReducer } from './contacts/contactSlice';
import { filterReducer } from './filter/filterSlice';
import { contactsReducer } from './contacts/slice';
import { authReducer } from './auth/sliceAuth';

export const reducer = combineReducers({
  auth: authReducer,
  filter: filterReducer,
  contacts: contactsReducer,
});
