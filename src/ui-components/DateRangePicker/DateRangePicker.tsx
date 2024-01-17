import React, { useState } from 'react'
import { DatePicker as MuiDatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3'
import { differenceInCalendarDays } from 'date-fns'
import { Typography } from '@mui/material'
import { RowContainer } from '../../business-components/shared/styles'
import { Container, DurationDisplay, StyledEndPicker, StyledStartPicker } from './styles'

interface DateRangePickerProps {
  startLabel: string
  endLabel: string
  defaultStartDate?: Date
  defaultEndDate?: Date
  onChange?: (startDate: Date, endDate: Date) => void
  testId?: string
}

export const DateRangePicker = ({
  testId,
  startLabel,
  endLabel,
  onChange,
  defaultStartDate,
  defaultEndDate,
}: DateRangePickerProps) => {
  const today = new Date()
  const [startDate, setStartDate] = useState<Date>(defaultStartDate || today)
  const [endDate, setEndDate] = useState<Date>(defaultEndDate || today)
  const onStartDateChange = (value: Date | null) => {
    setStartDate(value!)
    onChange?.(value!, endDate)
  }
  const onEndDateChange = (value: Date | null) => {
    setEndDate(value!)
    onChange?.(startDate, value!)
  }
  const differenceInNights = differenceInCalendarDays(endDate, startDate)

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Container data-testid={testId}>
        <StyledStartPicker
          label={startLabel}
          value={startDate}
          disablePast
          format="yyyy/MM/dd"
          onChange={onStartDateChange}
          data-testid={`${testId}-start`}
        />
        <DurationDisplay data-testid={`${testId}-duration`} variant="body1">
          {differenceInNights}晚
        </DurationDisplay>
        <StyledEndPicker
          label={endLabel}
          value={endDate}
          minDate={startDate}
          format="yyyy/MM/dd"
          onChange={onEndDateChange}
          data-testid={`${testId}-end`}
        />
      </Container>
    </LocalizationProvider>
  )
}
