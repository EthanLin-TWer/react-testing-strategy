import React from 'react'
import { Provider as ReduxProvider } from 'react-redux'

import { AppRoutes } from './app-routes'
import { configureAppStore } from './configure-store'

const store = configureAppStore()
export const App = () => (
  <React.StrictMode>
    <ReduxProvider store={store}>
      <AppRoutes />
    </ReduxProvider>
  </React.StrictMode>
)
