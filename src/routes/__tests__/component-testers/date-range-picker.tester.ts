import { screen } from '@testing-library/react'

import { findFirstChildren, findSecondChildren, parseText, parseValue } from './_base.tester'

export interface DateRangePickerTester {
  getStartLabel(): string
  getEndLabel(): string

  getDisplayText(): string

  selectStartDate(date: string): Promise<void>
  selectEndDate(date: string): Promise<void>
}

export const findDateRangePicker = (testId: string): DateRangePickerTester => {
  // implementation details
  const getElement = () => screen.getByTestId(testId)
  const getStartDatePicker = () => findFirstChildren(getElement(), 'div')!
  const getEndDatePicker = () => findSecondChildren(getElement(), 'div')!

  // public interfaces
  const getStartLabel = () => {
    return parseText(findFirstChildren(getStartDatePicker(), 'label')!)
  }

  const getEndLabel = () => {
    return parseText(findFirstChildren(getEndDatePicker(), 'label')!)
  }

  const getSelectedStartDate = () => {
    return parseValue(findFirstChildren(findFirstChildren(getStartDatePicker(), 'div')!, 'input'))
  }

  const getSelectedEndDate = () => {
    return parseValue(findFirstChildren(findFirstChildren(getEndDatePicker(), 'div')!, 'input'))
  }

  const getDisplayText = () => {
    const duration = parseText(screen.getByTestId(`${testId}-duration`))
    return `${getSelectedStartDate()} ${duration} ${getSelectedEndDate()}`
  }

  const selectStartDate = async () => {}
  const selectEndDate = async () => {}

  return { getStartLabel, getEndLabel, getDisplayText, selectStartDate, selectEndDate }
}
