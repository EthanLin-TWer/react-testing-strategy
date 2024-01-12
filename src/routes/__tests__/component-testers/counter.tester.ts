import { screen } from '@testing-library/react'

import { findFirstChildren, getText } from './_base.tester'

export interface CounterTester {
  getLabel(): string
  getValue(): number
}

export const findCounter = (testId: string): CounterTester => {
  // implementation details
  const getWrapperElement = () => screen.getByTestId(testId)
  const getInputElement = () => findFirstChildren(getWrapperElement(), 'div')!

  // public interfaces
  const getLabel = () => getText(findFirstChildren(getWrapperElement(), 'label')!)
  const getValue = () => {
    const value = findFirstChildren(getInputElement(), 'input')!.getAttribute('value')
    return value ? Number(value) : NaN
  }

  return { getLabel, getValue }
}
