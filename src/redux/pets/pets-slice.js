import { createSlice } from '@reduxjs/toolkit';

const petsInitialState = {
  category: 'sell',
};

const petsSlice = createSlice({
  name: 'pets',
  initialState: petsInitialState,
  reducers: {
    updateCategory(state, action) {
      // category: 'sell',
      state.category = action.payload;
    },
  },
});

export const petsReducer = petsSlice.reducer;

export const { updateCategory } = petsSlice.actions;
