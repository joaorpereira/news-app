import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store, persistor } from '../store/store'
import { PersistGate } from 'redux-persist/integration/react'

import { render, RenderResult } from '@testing-library/react'

export const renderProvider = (children: React.ReactNode): RenderResult =>
  render(
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>{children}</BrowserRouter>
      </PersistGate>
    </Provider>
  )
