import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { New } from 'utils/types'

export interface NewState {
  newInfo: New | null
}

const initialState: NewState = {
  newInfo: null,
}

export const newSlice = createSlice({
  name: 'newInfo',
  initialState,
  reducers: {
    set: (state, action: PayloadAction<New>) => {
      state.newInfo = action.payload
    },
  },
})

export const { set } = newSlice.actions

export default newSlice.reducer
