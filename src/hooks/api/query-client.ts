// @ts-ignore
import { QueryClient, QueryOptions } from '@tanstack/react-query'

export const configureQueryClient = (queryOptions?: QueryOptions) => {
  return new QueryClient({
    defaultOptions: {
      query: {
        cacheTime: 0,
        retry: false,
        retryOnMount: false,
        refetchOnWindowFocus: false,
        // disable auto refresh
        staleTime: Infinity,
        ...queryOptions,
      },
    },
  })
}
