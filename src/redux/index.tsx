import { configureStore } from '@reduxjs/toolkit'
import { CurriedGetDefaultMiddleware } from '@reduxjs/toolkit/dist/getDefaultMiddleware'

import homeReducer, { HomeState } from './home-reducers'
import contactReducer, { ContactState } from './contact-reducers'
import { Envs } from '../constants/envs'

export interface StoreState {
  home: HomeState
  contact: ContactState
}

const reducers = {
  home: homeReducer,
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
    preloadedState: {}, // this can be initialized from each reducer
    reducer: reducers,
    middleware: getMiddlewares,
    devTools: process.env.NODE_ENV === Envs.DEVELOPMENT,
  })
