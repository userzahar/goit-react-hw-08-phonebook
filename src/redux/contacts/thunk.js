import { createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';
axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

// export const getContactsThunk = createAsyncThunk('contacts/get', () => {
//   getContacts();
// });

export const createContactsThunk = createAsyncThunk(
  'contacts/post',
  async credentials => {
    try {
      const { data } = await axios.post('/contacts', credentials);
      return data;
    } catch (er) {
      console.log('🚀 ~ Error:', er.message);
    }
  }
);
export const deleteContactsThunk = createAsyncThunk(
  'contacts/delete',
  async id => {
    try {
      const { data } = await axios.delete(`/contacts/${id}`);
      return data;
    } catch (er) {
      console.log('🚀 ~ Error:', er.message);
    }
  }
);

export const getContactsThunk = createAsyncThunk('contacts/get', async () => {
  try {
    const { data } = await axios.get('/contacts');
    return data;
  } catch {
    console.log('🚀 ~ Error:');
  }
});
