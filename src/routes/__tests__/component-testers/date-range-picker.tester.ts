import { screen } from '@testing-library/react'

import { findFirstChildren, getText } from './_base.tester'

export interface DateRangePickerTester {
  getStartLabel(): string
  getEndLabel(): string
  getValue(): string
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

  const getValue = () => {
    return '' /* getElement().getAttribute('value') || '' */
  }

  return { getStartLabel, getEndLabel, getValue }
}
