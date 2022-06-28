import { createSlice } from '@reduxjs/toolkit';

export interface VisibilityState {
  airVisible: boolean,
  waterVisible: boolean,
  tissuesVisible: boolean,
  boneVisible: boolean,
}

const initialState: VisibilityState = {
  airVisible: true,
  waterVisible: true,
  tissuesVisible: true,
  boneVisible: true,
};

export const visibilityHandler = createSlice({
  name: 'visibility',
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
