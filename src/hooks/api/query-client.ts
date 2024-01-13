// @ts-ignore
import { QueryClient } from '@tanstack/react-query'

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: 0,
      retry: false,
      retryOnMount: false,
      refetchOnWindowFocus: false,
      // disable auto refresh
      staleTime: Infinity,
    },
  },
})
