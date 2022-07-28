import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice';
import { apiSlice } from './apiSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [apiSlice.reducerPath] : apiSlice.reducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(apiSlice.middleware)
})