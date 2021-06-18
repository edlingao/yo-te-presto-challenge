/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export const exampleSlice = createSlice({
  name: 'User',
  initialState: {
    value: [],
  },
  reducers: {
    login(state, { payload }) {
      console.log({ state, payload });
      state.value = payload;
    },
    logout(state, action) {
      state.value = action;
    },
  },
});

export const { logout, login } = exampleSlice.actions;

export default exampleSlice.reducer;
