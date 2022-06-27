import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../../store';

/**
 * @created 27/04/2022 - 18:15
 * @project al_threejs_dicom_viewer
 * @author Angelo Lamonaca - https://github.com/angelolamonaca
 * @date 27/04/2022
 */

// Define a type for the slice state
export interface VisibilityState {
  airVisible: boolean,
  waterVisible: boolean,
  tissuesVisible: boolean,
  boneVisible: boolean,
}

// Define the initial state using that type
const initialState: VisibilityState = {
  airVisible: true,
  waterVisible: true,
  tissuesVisible: true,
  boneVisible: true,
};

export const visibilityHandler = createSlice({
  name: 'visibility',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setAirVisible: (state) => {
      state.airVisible = !state.airVisible;
    },
    setWaterVisible: (state) => {
      state.waterVisible = !state.waterVisible;
    },
    setTissuesVisible: (state) => {
      state.tissuesVisible = !state.tissuesVisible;
    },
    setBoneVisible: (state) => {
      state.boneVisible = !state.boneVisible;
    },
  },
});

export const {
  setAirVisible,
  setWaterVisible,
  setTissuesVisible,
  setBoneVisible,
} = visibilityHandler.actions;

// Other code such as selectors can use the imported `RootState` type
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const selectCount = (state: RootState) => state.counter.value;

export default visibilityHandler.reducer;
