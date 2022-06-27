import { configureStore } from '@reduxjs/toolkit';
import { visibilityHandler } from './features/visibility/visibilityHandler';

export const store = configureStore({
  reducer: {
    airVisible: visibilityHandler.reducer,
    fatVisible: visibilityHandler.reducer,
    boneVisible: visibilityHandler.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
