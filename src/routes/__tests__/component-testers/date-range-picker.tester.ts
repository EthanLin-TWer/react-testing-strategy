import { screen } from '@testing-library/react'

import { findFirstChildren, findSecondChildren, parseText, parseValue } from './_base.tester'
import userEvent from '@testing-library/user-event'
import { getDate, getMonth, getYear } from 'date-fns'

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

  const selectDate = async (picker: Element, date: string) => {
    /* these selectors should go into a specific picker tester */
    const findCalendarIconElement = () =>
      findFirstChildren(findFirstChildren(findFirstChildren(picker, 'div')!, 'div')!, 'button')!

    const getSelectedDate = () => parseValue(findFirstChildren(findFirstChildren(picker, 'div')!, 'input'))

    // click the calendar icon
    await userEvent.click(findCalendarIconElement())

    // find target date and select
    const day = getDate(date).toString()
    const month = getMonth(date).toString()
    const year = getYear(date).toString()

    if (year !== getYear(getSelectedDate()).toString()) {
      // select to the same year first
    }

    if (month !== getMonth(getSelectedDate()).toString()) {
      // select to the same month first
    }

    await userEvent.click(screen.getByRole('gridcell', { name: day }))
  }

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

  const selectStartDate = async (date: string) => {
    await selectDate(getStartDatePicker(), date)
  }

  const selectEndDate = async (date: string) => {
    await selectDate(getEndDatePicker(), date)
  }

  return { getStartLabel, getEndLabel, getDisplayText, selectStartDate, selectEndDate }
}
