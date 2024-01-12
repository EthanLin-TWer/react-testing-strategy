import { screen } from '@testing-library/react'

import { findFirstChildren, parseText } from './_base.tester'

export interface CounterTester {
  getLabel(): string
  getValue(): number
}

export const findCounter = (testId: string): CounterTester => {
  // implementation details
  const getWrapperElement = () => screen.getByTestId(testId)
  const getInputElement = () => findFirstChildren(getWrapperElement(), 'div')!

  // public interfaces
  const getLabel = () => parseText(findFirstChildren(getWrapperElement(), 'label')!)
  const getValue = () => {
    const value = findFirstChildren(getInputElement(), 'input')!.getAttribute('value')
    return value ? Number(value) : NaN
  }

  return { getLabel, getValue }
}
