import { PropsWithChildren, ReactElement } from 'react'
import { render } from '@testing-library/react'
import { Provider as ReduxProvider } from 'react-redux'
import { QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { configureAppStore } from '../src/redux'
import { queryClient } from '../src/hooks/api/query-client'
import { Header } from '../src/routes/Header'

const registerUnderPath = (path: string) => {
  return function Wrapper<T = unknown>({ children }: PropsWithChildren<T>) {
    return (
      <ReduxProvider store={configureAppStore()}>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Header />}>
                <Route path={path} element={children} />
                <Route path="hotels/list" element={<div />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </QueryClientProvider>
      </ReduxProvider>
    )
  }
}

export const renderRouteComponent = (componentUnderTest: ReactElement, path = '') => {
  render(componentUnderTest, { wrapper: registerUnderPath(path) })
}

export const renderHotelList = (componentUnderTest: ReactElement, urlPath: string) => {
  window.history.pushState({}, 'initialize search', urlPath)
  render(componentUnderTest, { wrapper: registerUnderPath('/hotels/list') })
}
