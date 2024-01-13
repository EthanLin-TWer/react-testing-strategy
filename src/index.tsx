import React from 'react'
import { createRoot, type Root } from 'react-dom/client'
// redux dependencies
import { Provider as ReduxProvider } from 'react-redux'
import { configureAppStore } from './redux'

import { Envs } from './constants/envs'
import { AppRoutes } from './app-routes'

// react query dependencies
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from './hooks/api/query-client'

if (process.env.NODE_ENV === Envs.DEVELOPMENT) {
  // setup mock server
  // setup other dev environment stuffs
}

const store = configureAppStore()
const root: Root = createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <QueryClientProvider client={queryClient}>
        <AppRoutes />
      </QueryClientProvider>
    </ReduxProvider>
  </React.StrictMode>
)
