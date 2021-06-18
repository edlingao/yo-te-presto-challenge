/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export const exampleSlice = createSlice({
  name: 'loggedStatus',
  initialState: {
    value: 'Unauthorized',
  },
  reducers: {
    login(state, { payload }) {
      state.value = payload;
    },
    logout(state, action) {
      state.value = action;
    },
  },
});

export const { logout, login } = exampleSlice.actions;

export default exampleSlice.reducer;
