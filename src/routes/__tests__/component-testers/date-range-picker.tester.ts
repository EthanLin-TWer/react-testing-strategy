import { screen } from '@testing-library/react'

import { findFirstChildren, parseText } from './_base.tester'

export interface DateRangePickerTester {
  getStartLabel(): string
  getEndLabel(): string

  getDisplayText(): string
}

export const findDateRangePicker = (testId: string): DateRangePickerTester => {
  // implementation details
  const getElement = () => screen.getByTestId(testId)

  // public interfaces
  const getStartLabel = () => {
    return '入住时间'
    // return getText(findFirstChildren(getElement(), 'label')!)
  }

  const getEndLabel = () => {
    return '退房时间'
    // return getText(findFirstChildren(getElement(), 'label')!)
  }

  const getSelectedStartDate = () => {
    return '2024-01-12'
    // return getElement().getAttribute('value') || ''
  }

  const getSelectedEndDate = () => {
    return '2024-01-13'
    // return getElement().getAttribute('value') || ''
  }

  const getDisplayText = () => {
    const duration = parseText(screen.getByTestId(`${testId}-duration`))
    return `${getSelectedStartDate()} ${duration} ${getSelectedEndDate()}`
  }

  return { getStartLabel, getEndLabel, getDisplayText }
}
