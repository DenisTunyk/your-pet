import { createSlice } from '@reduxjs/toolkit';
import {
  register,
  logIn,
  logOut,
  refreshUser,
  updateUserAvatar,
  deleteUsersAvatar,
  updateUser,
} from './auth-operations';

const initialState = {
  user: { email: null, id: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.pending](state) {
      state.isRefreshing = true;
    },
    [register.fulfilled](state, action) {
      state.user.email = action.payload.email;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    },
    [register.rejected](state) {
      state.isRefreshing = false;
    },
    [logIn.pending](state) {
      state.isRefreshing = true;
    },
    [logIn.fulfilled](state, action) {
      state.user.userId = action.payload.userId;
      state.user.email = action.payload.email;
      state.user.avatarURL = action.payload.avatarURL;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    },
    [logIn.rejected](state) {
      state.isRefreshing = false;
    },
    [logOut.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [refreshUser.pending](state) {
      state.isRefreshing = true;
    },
    [refreshUser.fulfilled](state, action) {
      state.user = { ...action.payload };
      state.isLoggedIn = true;
      state.isRefreshing = false;
    },
    [refreshUser.rejected](state) {
      state.isRefreshing = false;
    },
    [updateUserAvatar.fulfilled](state, action) {
      state.user.avatarURL = action.payload.avatarURL;
    },
    [deleteUsersAvatar.fulfilled](state) {
      state.user.avatarURL = null;
    },
    [updateUser.pending](state) {
      state.isRefreshing = true;
    },
    [updateUser.fulfilled](state, { payload }) {
      state.isRefreshing = false;
      state.user = { ...payload };
    },
    [updateUser.rejected](state) {
      state.isRefreshing = false;
    },
  },
});

export const authReducer = authSlice.reducer;
