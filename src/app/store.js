import { configureStore } from '@reduxjs/toolkit';
import exampleReducer from '../store/exampleSlice';
import loggedReducer from '../store/userSlice';

export default configureStore({
  reducer: {
    example: exampleReducer,
    loggedStatus: loggedReducer,
  },
});
