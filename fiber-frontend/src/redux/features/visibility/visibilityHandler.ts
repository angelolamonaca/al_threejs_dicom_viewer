import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../../store';

// Define a type for the slice state
interface VisibilityState {
  airVisible: boolean,
  fatVisible: boolean,
  boneVisible: boolean,
}

// Define the initial state using that type
const initialState: VisibilityState = {
  airVisible: true,
  fatVisible: true,
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
    setFatVisible: (state) => {
      state.fatVisible = !state.fatVisible;
    },
    setBoneVisible: (state) => {
      state.boneVisible = !state.boneVisible;
    },
  },
});

export const {
  setAirVisible,
  setFatVisible,
  setBoneVisible,
} = visibilityHandler.actions;

// Other code such as selectors can use the imported `RootState` type
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const selectCount = (state: RootState) => state.counter.value;

export default visibilityHandler.reducer;
