import homeReducer from './components/home/reducers'
import aboutReducer from './components/about/reducers'
import contactReducer from './components/contact/reducers'
import { configureStore } from '@reduxjs/toolkit'
import { Envs } from './constants/envs'
import { CurriedGetDefaultMiddleware } from '@reduxjs/toolkit/dist/getDefaultMiddleware'

export interface StoreState {
  about: Record<string, never>
  home: Record<string, never>
  contact: Record<string, never>
}

const initialState = {
  about: {},
  home: {},
  contact: {},
}

const reducers = {
  home: homeReducer,
  about: aboutReducer,
  contact: contactReducer,
}

const getMiddlewares = (getDefaultMiddleware: CurriedGetDefaultMiddleware) => {
  if (process.env.NODE_ENV === Envs.DEVELOPMENT) {
    const logger = require('redux-logger').createLogger({ collapse: true })
    return getDefaultMiddleware().concat(logger)
  }

  return getDefaultMiddleware()
}

export const configureAppStore = () =>
  configureStore({
    preloadedState: initialState,
    reducer: reducers,
    middleware: getMiddlewares,
    devTools: process.env.NODE_ENV === Envs.DEVELOPMENT,
  })
