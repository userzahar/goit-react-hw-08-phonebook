import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

const register = createAsyncThunk('auth/register', async credentials => {
  try {
    const { data } = await axios.post('/users/signup', credentials);
    console.log('🚀 ~ data:', data);
    setAuthHeader(data.token);
    return data;
  } catch (er) {
    console.log('💥', er.message);
  }
});

const login = createAsyncThunk('auth/login', async credentials => {
  try {
    const { data } = await axios.post('/users/login', credentials);
    setAuthHeader(data.token);
    return data;
  } catch {}
});

const logOut = createAsyncThunk('auth/logout', async () => {
  try {
    await axios.post('/users/logout');
    clearAuthHeader();
  } catch {}
});

export const authOperations = {
  register,
  login,
  logOut,
};
