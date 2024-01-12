import React from 'react'
import { createRoot, type Root } from 'react-dom/client'
import { Provider as ReduxProvider } from 'react-redux'

import { Envs } from './constants/envs'
import { AppRoutes } from './app-routes'
import { configureAppStore } from './redux'

if (process.env.NODE_ENV === Envs.DEVELOPMENT) {
  // setup mock server
  // setup other dev environment stuffs
}

const store = configureAppStore()
const root: Root = createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <AppRoutes />
    </ReduxProvider>
  </React.StrictMode>
)
