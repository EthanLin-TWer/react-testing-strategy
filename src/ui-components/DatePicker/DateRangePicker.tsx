import React, { useState } from 'react'
import { DatePicker as MuiDatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3'
import { addDays, differenceInCalendarDays } from 'date-fns'

interface DateRangePickerProps {
  startLabel: string
  endLabel: string
  testId?: string
}

export const DateRangePicker = ({ testId, startLabel, endLabel }: DateRangePickerProps) => {
  const today = new Date()
  const [startDate, setStartDate] = useState<Date>(today)
  const [endDate, setEndDate] = useState<Date>(addDays(today, 1))
  const onStartDateChange = (value: Date | null) => {
    setStartDate(value!)
  }
  const onEndDateChange = (value: Date | null) => {
    setEndDate(value!)
  }
  const differenceInNights = differenceInCalendarDays(endDate, startDate)

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div data-testid={testId}>
        <MuiDatePicker
          label={startLabel}
          value={startDate}
          disablePast
          onChange={onStartDateChange}
          data-testid={`${testId}-start`}
        />
        <span data-testid={`${testId}-duration`}>-- {differenceInNights}晚 --</span>
        <MuiDatePicker
          label={endLabel}
          value={endDate}
          minDate={startDate}
          onChange={onEndDateChange}
          data-testid={`${testId}-end`}
        />
      </div>
    </LocalizationProvider>
  )
}
