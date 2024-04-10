import { configureStore } from '@reduxjs/toolkit';
import { getFilmsApi } from './api/get-films';

export const store = configureStore({
  reducer: {
    [getFilmsApi.reducerPath]: getFilmsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(getFilmsApi.middleware),
});
