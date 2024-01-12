import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { findFirstChildren, getText } from './_base.tester'

export interface SearchDropdownTester {
  getLabel(): string
  getValue(): string
  getDisplayText(): string
  getOptions(): Promise<string[]>

  isPresent(): boolean
  isEnabled(): boolean
}

export const findSearchDropdown = (testId: string): SearchDropdownTester => {
  // implementation details
  const getElement = () => screen.getByTestId(testId)
  const getDropdownWrapperElement = () => findFirstChildren(getElement(), 'div')!
  const clickDropdown = async () => {
    await userEvent.click(getDropdownWrapperElement())
  }

  // public interfaces
  const getLabel = () => screen.getByTestId(`${testId}-label`).textContent!
  const getValue = () => screen.getByTestId(`${testId}-input`).getAttribute('value')!
  const getDisplayText = () => getText(getDropdownWrapperElement())
  const getOptions = async (): Promise<string[]> => {
    await clickDropdown() // to open the dropdown so the options/dropdown would appear in DOM
    const optionElements = screen.getAllByRole('option')
    const options = optionElements.map(getText)
    await clickDropdown() // to close the dropdown and resume dropdown component to original state
    return options
  }

  const isPresent = () => {
    return true
  }
  const isEnabled = () => screen.getByTestId(`${testId}-input`).getAttribute('disabled') === null

  return { getLabel, getValue, getDisplayText, getOptions, isPresent, isEnabled }
}
