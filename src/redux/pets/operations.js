import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://project-7-backend.onrender.com';

export const getPets = createAsyncThunk(
  'pets/getPets',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('/api/pets');
      return response.data;
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);

export const deletePet = createAsyncThunk(
    'pets/deletePets',
    async (_id, { rejectWithValue }) => {
        try {
          await axios.delete(`/api/pets/${_id}`);
          return _id;
        } catch (error) {
          rejectWithValue(error.message);
        }
    }
)
