import { createSlice } from '@reduxjs/toolkit';
import { getPets, deletePet } from './operations';

const petsInitialState = {
  category: 'sell',
  pets: [],
  isLoading: false,
};

const petsSlice = createSlice({
  name: 'pets',
  initialState: petsInitialState,
  reducers: {
    updateCategory(state, action) {
      state.category = action.payload;
    },
  },
  extraReducers: {
    [getPets.pending](state) {
      state.isLoading = true;
    },
    [getPets.fulfilled](state, action) {
      state.pets = action.payload;
      state.isLoading = false;
    },
    [getPets.fulfilled](state, action) {
      state.pets = action.payload;
      state.isLoading = false;
    },
    [getPets.rejected](state) {
      state.isLoading = false;
    },
    [deletePet.pending](state) {
      state.isLoading = true;
    },
    [deletePet.fulfilled](state, action) {
      state.pets = state.pets.filter(pet => pet._id !== action.payload);
      state.isLoading = false;
    },
    [deletePet.rejected](state) {
      state.isLoading = false;
    },
  },
});

export const petsReducer = petsSlice.reducer;

export const { updateCategory } = petsSlice.actions;
