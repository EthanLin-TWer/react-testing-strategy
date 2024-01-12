import { useEffect } from 'react'

export const onMount = (functionToExecute: () => void) => {
  useEffect(functionToExecute, [])
}
