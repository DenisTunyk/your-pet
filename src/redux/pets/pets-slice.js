import { createSlice } from '@reduxjs/toolkit';

const petsInitialState = {
  category: 'sell',
};

const petsSlice = createSlice({
  name: 'pets',
  initialState: petsInitialState,
  reducers: {
    updateCategory(state, action) {
      state.category = action.payload;
    },
  },
});

export const petsReducer = petsSlice.reducer;

export const { updateCategory } = petsSlice.actions;
