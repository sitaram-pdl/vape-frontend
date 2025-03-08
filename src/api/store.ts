import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import { authApi } from './auth';
import { careerApi } from './career';
import { contactApi } from './contact';
import { rtkQueryErrorLogger } from './error';
import { galleriesApi } from './galleries';

const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [contactApi.reducerPath]: contactApi.reducer,
    [careerApi.reducerPath]: careerApi.reducer,
    [galleriesApi.reducerPath]: galleriesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      rtkQueryErrorLogger,
      authApi.middleware,
      contactApi.middleware,
      careerApi.middleware,
      galleriesApi.middleware,
    ),
});
setupListeners(store.dispatch);

export default store;
