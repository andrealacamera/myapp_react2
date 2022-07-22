import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  counts: 0,
  currentPage: 1,
  results: []
}

export const swSlice = createSlice({
  name: 'starwars',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

export const { increment, decrement, incrementByAmount } = swSlice.actions
export default swSlice.reducer