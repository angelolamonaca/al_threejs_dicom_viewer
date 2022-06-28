import { configureStore } from '@reduxjs/toolkit';
import { visibilityHandler } from './features/visibility/visibilityHandler';

export const store = configureStore({
  reducer: {
    visibility: visibilityHandler.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
