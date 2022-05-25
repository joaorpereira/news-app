import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store, persistor } from './store/store'
import { PersistGate } from 'redux-persist/integration/react'

import Default from './pages/Default/Default'
import GlobalStyles from './styles/global'

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <GlobalStyles />
          <Default />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  )
}

export default App
