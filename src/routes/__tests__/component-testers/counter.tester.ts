import { screen } from '@testing-library/react'

import { findFirstChildren, getText } from './_base.tester'

export interface CounterTester {
  getLabel(): string
  getValue(): string
}

export const findCounter = (testId: string): CounterTester => {
  // implementation details
  const getElement = () => screen.getByTestId(testId)

  // public interfaces
  const getLabel = () => getText(findFirstChildren(getElement(), 'label')!)
  const getValue = () => {
    return '' /* getElement().getAttribute('value') || '' */
  }

  return { getLabel, getValue }
}
