import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { parseText } from './_base.tester'

export interface ButtonTester {
  getValue(): string
  click(): Promise<void>

  isPresent(): boolean
  isEnabled(): boolean
}

export const findButton = (testId: string): ButtonTester => {
  // implementation details
  const getElement = () => screen.getByTestId(testId)
  const isDisabled = () => getElement().getAttribute('disabled') !== null

  // public interfaces
  const getValue = () => parseText(getElement())

  const isPresent = () => screen.queryByTestId(testId) !== null
  const isEnabled = () => !isDisabled()
  const click = async () => {
    if (!isPresent()) {
      return
    }

    await userEvent.click(getElement())
  }

  return { isPresent, getValue, isEnabled, click }
}
