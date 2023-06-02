import { createSlice } from '@reduxjs/toolkit';
import {
  register,
  logIn,
  logOut,
  refreshUser,
  updateUserAvatar,
  deleteUsersAvatar,
} from './auth-operations';

const initialState = {
  user: { email: null, password: null, id: null },
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
      state.user.id = action.payload.userId;
      state.user.email = action.payload.email;
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
      state.user.id = action.payload.userId;
      state.user.email = action.payload.email;
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
  },
});

export const authReducer = authSlice.reducer;
