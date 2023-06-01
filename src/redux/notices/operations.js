import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://project-7-backend.onrender.com';

export const getNotices = createAsyncThunk(
  'notices/getNotices',
  async (category, { rejectWithValue }) => {
    try {
      const result = await axios.get(`/api/notices/category/${category}`);

      return result.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getNoticesByQuery = createAsyncThunk(
  'notices/getNoticesByQuery',
  async (credentials, { rejectWithValue }) => {
    const { category, search } = credentials;
    try {
      const { data } = await axios.get(
        `/api/notices/search/${category}?title=${search}`
      );
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getFavoriteNotices = createAsyncThunk(
  'notices/getFavoriteNotices',
  async ({ rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/api/notices/favorites`);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getFavoriteNoticesByQuery = createAsyncThunk(
  'notices/getFavoriteNotices',
  async (search, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        `/api/notices/favorites/search/${search}`
      );
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getMyAdsNoticesByQuery = createAsyncThunk(
  'notices/getMyAdsNoticesByQuery',
  async (search, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/api/notices/myads/search/${search}`);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getMyAdsNotices = createAsyncThunk(
  'notices/getMyAdsNotices',
  async ({ rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/api/notices/myAds`);

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
// -------------------------------------------

export const getNoticeById = createAsyncThunk(
  'notices/getNoticeById',
  async (_id, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/api/notices/notice/${_id}`);

      return data.result;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addNotice = createAsyncThunk(
  'notices/addNotice',
  async ({ category, newFormData }, { rejectWithValue }) => {
    try {
      console.log(newFormData);
      await axios.post(`/api/notices/addNotice/${category}`, newFormData);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateNotice = createAsyncThunk(
  'notices/updateNotice',
  async (credentials, { rejectWithValue }) => {
    const { _id, ...params } = credentials;
    try {
      await axios.put(`/api/notices/${_id}`, params);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const removeNotice = createAsyncThunk(
  'notices/removeNotice',
  async (_id, { rejectWithValue }) => {
    try {
      await axios.delete(`/api/notices/myads/${_id}`);

      return { id: _id };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addFavoriteNotice = createAsyncThunk(
  'notices/addFavoriteNotice',
  async (pet, { rejectWithValue }) => {
    try {
      const response = await axios.patch(`/api/notices/favorite/${pet._id}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const removeFavoriteNotice = createAsyncThunk(
  'notices/removeFavoriteNotice',
  async (pet, { rejectWithValue }) => {
    try {
      await axios.delete(`/api/notices/favorite/${pet._id}`);

      return pet;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
