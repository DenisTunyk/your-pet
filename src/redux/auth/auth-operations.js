import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = '';

export const register = createAsyncThunk(
  'autn/register',
  async (credentials, thunkAPI) => {
    try {
      const responce = await axios.post('/users/signup', credentials);
      return responce.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
