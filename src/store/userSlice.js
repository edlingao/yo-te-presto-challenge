/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import axios from '../axios/axios';

export const exampleSlice = createSlice({
  name: 'loggedStatus',
  initialState: {
    value: localStorage.getItem('AccessToken') != null
      ? localStorage.getItem('AccessToken')
      : 'Unauthorized',
  },
  reducers: {
    login(state, { payload }) {
      localStorage.setItem('AccessTokenObj', JSON.stringify(payload));
      localStorage.setItem('AccessToken', payload.accessToken);
      axios.defaults.headers['access-token'] = payload.accessToken;
      axios.defaults.headers.client = payload.client;
      axios.defaults.headers.uid = payload.uid;

      state.value = payload.accessToken;
    },
    logout(state) {
      localStorage.removeItem('AccessToken');
      localStorage.removeItem('AccessTokenObj');

      state.value = 'Unauthorized';
    },
  },
});

export const { logout, login } = exampleSlice.actions;

export default exampleSlice.reducer;
