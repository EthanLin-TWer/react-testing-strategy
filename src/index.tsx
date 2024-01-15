import React from 'react'
import { createRoot, type Root } from 'react-dom/client'
// redux dependencies
import { Provider as ReduxProvider } from 'react-redux'
import { configureAppStore } from './redux'

import { Envs } from './constants/envs'
import { AppRoutes } from './app-routes'

// react query dependencies
import { QueryClientProvider } from '@tanstack/react-query'
import { configureQueryClient } from './hooks/api/query-client'

const enablingMocking = async (): Promise<unknown> => {
  if (process.env.NODE_ENV !== Envs.DEVELOPMENT) {
    return
  }

  const { worker } = await import('./mocks')
  return worker.start({ onUnhandledRequest: 'bypass' })
}

const store = configureAppStore()
const queryClient = configureQueryClient()
const root: Root = createRoot(document.getElementById('root') as HTMLElement)
enablingMocking().then(() => {
  root.render(
    <React.StrictMode>
      <ReduxProvider store={store}>
        <QueryClientProvider client={queryClient}>
          <AppRoutes />
        </QueryClientProvider>
      </ReduxProvider>
    </React.StrictMode>
  )
})
