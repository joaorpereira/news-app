import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'
import { reducers } from './reducer'

const persistConfig = {
  key: '@news-app',
  storage,
}

export const persistedReducer = persistReducer(persistConfig, reducers)
