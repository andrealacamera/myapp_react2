import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice';
import { apiSlice } from './apiSlice';
import { swSlice } from './swSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [apiSlice.reducerPath] : apiSlice.reducer,
    [swSlice.reducerPath]: swSlice.reducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat([apiSlice.middleware, swSlice.middleware])
})