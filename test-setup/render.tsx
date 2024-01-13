import { PropsWithChildren, ReactElement } from 'react'
import { render } from '@testing-library/react'
import { Provider as ReduxProvider } from 'react-redux'
import { QueryClientProvider } from '@tanstack/react-query'

import { configureAppStore } from '../src/redux'
import { queryClient } from '../src/hooks/api/query-client'

function Wrapper<T = unknown>({ children }: PropsWithChildren<T>) {
  return (
    <ReduxProvider store={configureAppStore()}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </ReduxProvider>
  )
}

export const renderComponent = (componentUnderTest: ReactElement) => {
  render(componentUnderTest, {
    wrapper: Wrapper,
  })
}
