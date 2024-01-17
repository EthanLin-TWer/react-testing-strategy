import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { findFirstChildren, parseText, parseValue } from './_base.tester'

export interface SearchDropdownTester {
  getLabel(): string
  getValue(): string
  getOptions(): Promise<string[]>

  select(value: string): Promise<void>
}

export const findSearchDropdown = (testId: string): SearchDropdownTester => {
  // implementation details
  const getElement = () => screen.getByTestId(testId)
  const getDropdownWrapperElement = () => {
    return findFirstChildren(findFirstChildren(getElement(), 'div')!, 'input')!
  }
  const clickDropdown = async () => {
    await userEvent.click(getDropdownWrapperElement())
  }

  // public interfaces
  const getLabel = () => parseText(findFirstChildren(getElement(), 'label')!)
  const getValue = () => parseValue(getDropdownWrapperElement())
  const getOptions = async (): Promise<string[]> => {
    await clickDropdown() // to open the dropdown so the options/dropdown would appear in DOM
    const optionElements = screen.getAllByRole('option')
    const options = optionElements.map(parseText)
    await clickDropdown() // to close the dropdown and resume dropdown component to original state
    return options
  }

  const select = async (value: string) => {
    await userEvent.click(getDropdownWrapperElement())
    await userEvent.click(screen.getByRole('option', { name: value }))
  }

  return { getLabel, getValue, getOptions, select }
}
