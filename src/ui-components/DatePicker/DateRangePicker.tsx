import React from 'react'
import { DatePicker as MuiDatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3'

interface DateRangePickerProps {
  startLabel: string
  endLabel: string
  testId?: string
}

export const DateRangePicker = ({ testId, startLabel, endLabel }: DateRangePickerProps) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <MuiDatePicker label={startLabel} data-testid={`${testId}-start`} />
      --
      <MuiDatePicker label={endLabel} data-testid={`${testId}-end`} />
    </LocalizationProvider>
  )
}
