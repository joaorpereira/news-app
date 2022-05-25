import { combineReducers } from '@reduxjs/toolkit'
import newReducer from './slices/newSlice'

export const reducers = combineReducers({
  newReducer,
})
