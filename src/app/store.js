import { configureStore } from '@reduxjs/toolkit';
import exampleReducer from '../features/slices/exampleSlice';

export default configureStore({
  reducer: {
    counter: exampleReducer,
  },
});
