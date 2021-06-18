import { configureStore } from '@reduxjs/toolkit';
import exampleReducer from '../store/exampleSlice';
import userReducer from '../store/userSlice';

export default configureStore({
  reducer: {
    example: exampleReducer,
    user: userReducer,
  },
});
