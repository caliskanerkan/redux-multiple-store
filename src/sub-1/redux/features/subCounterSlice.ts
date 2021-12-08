import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  counter: 1,
}

const subCounterSlice = createSlice({
  name: 'subCounterSlice',
  initialState,
  reducers:{
    setCounter: (state) => {
      state.counter = state.counter + 1
    }
  }
});

export const {
  setCounter
} = subCounterSlice.actions
export default subCounterSlice.reducer