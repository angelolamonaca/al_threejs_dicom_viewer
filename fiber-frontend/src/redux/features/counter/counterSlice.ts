import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../../store';

// Define a type for the slice state
interface CounterState {
  value: number;
}

// Define the initial state using that type
const initialState: CounterState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    increment: (state) => {
      console.log('increment');
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const {
  increment,
  decrement,
} = counterSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const selectCount = (state: RootState) => state.counter.value;

export default counterSlice.reducer;
