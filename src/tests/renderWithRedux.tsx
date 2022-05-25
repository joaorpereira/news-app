import { createStore } from '@reduxjs/toolkit'
import { BrowserRouter } from 'react-router-dom'
import { render, RenderResult } from '@testing-library/react'
import { Provider } from 'react-redux'
import { NewState } from 'store/slices/newSlice'
import { reducers } from '../store/reducer'

const initialState: NewState = {
  newInfo: null,
}

export const renderWithRedux = (ui: any, reduxState: any): RenderResult => {
  const store = createStore(reducers, reduxState || initialState)
  return render(
    <Provider store={store}>
      <BrowserRouter>{ui}</BrowserRouter>
    </Provider>
  )
}
