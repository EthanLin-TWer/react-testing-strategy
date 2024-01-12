import { screen } from '@testing-library/react'

import { findFirstChildren, parseText } from './_base.tester'

export interface ButtonTester {
  getValue(): string

  isPresent(): boolean
  isEnabled(): boolean
}

export const findButton = (testId: string): ButtonTester => {
  // implementation details
  const getElement = () => screen.getByTestId(testId)

  // public interfaces
  const getValue = () => parseText(getElement())

  const isPresent = () => screen.queryByTestId(testId) !== null
  const isDisabled = () => getElement().getAttribute('disabled') !== null
  const isEnabled = () => !isDisabled()

  return { isPresent, getValue, isEnabled }
}
