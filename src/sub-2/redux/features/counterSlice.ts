import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  counter: 0
}

const counterSlice = createSlice({
  name: 'counterSlice',
  initialState,
  reducers: {
    setCounter: (state) => {
      state.counter = state.counter + 1
    }
  }
});

export const {
  setCounter
} = counterSlice.actions
export default counterSlice.reducer