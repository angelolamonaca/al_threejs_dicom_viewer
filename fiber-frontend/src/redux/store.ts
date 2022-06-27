import { configureStore } from '@reduxjs/toolkit';
import { visibilityHandler } from './features/visibility/visibilityHandler';

/**
 * @created 15/04/2022 - 10:12
 * @project al_threejs_dicom_viewer
 * @author Angelo Lamonaca - https://github.com/angelolamonaca
 * @date 15/04/2022
 */

export const store = configureStore({
  reducer: {
    visibility: visibilityHandler.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
