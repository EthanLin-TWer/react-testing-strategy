import { useEffect } from 'react'

export const useOnMount = (functionToExecute: () => void) => {
  useEffect(functionToExecute, [])
}
