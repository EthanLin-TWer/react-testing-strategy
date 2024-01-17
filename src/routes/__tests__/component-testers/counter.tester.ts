import { screen } from '@testing-library/react'

import { findFirstChildren, parseText, parseValue } from './_base.tester'
import userEvent from '@testing-library/user-event'

export interface CounterTester {
  getLabel(): string
  getValue(): number

  clickToIncrement(): Promise<void>
  clickToDecrement(): Promise<void>
}

export const findCounter = (testId: string): CounterTester => {
  // implementation details
  const getWrapperElement = () => screen.getByTestId(testId)
  const getInputElement = () => findFirstChildren(getWrapperElement(), 'div')!

  // public interfaces
  const getLabel = () => parseText(findFirstChildren(getWrapperElement(), 'label')!)
  const getValue = () => {
    const value = parseValue(findFirstChildren(getInputElement(), 'input')!)
    return Number(value)
  }
  const clickToIncrement = async () => {
    await userEvent.click(screen.getByTestId(`${testId}-increment`))
  }
  const clickToDecrement = async () => {
    await userEvent.click(screen.getByTestId(`${testId}-decrement`))
  }

  return { getLabel, getValue, clickToIncrement, clickToDecrement }
}
