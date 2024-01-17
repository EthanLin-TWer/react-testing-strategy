import React, { useCallback, useState } from 'react'
import { InputAdornment } from '@mui/material'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline'
import { BorderlessCounter } from './styles'

interface CounterProps {
  label: string
  min?: number
  max?: number
  defaultValue?: number
  onChange?: (value: number) => void
  testId?: string
}

export const Counter = ({ testId, label, onChange, defaultValue = 0, min = 0, max = Infinity }: CounterProps) => {
  const [value, setValue] = useState<number>(defaultValue)
  const handleChange = useCallback((value: number) => {
    if (value >= min && value <= max) {
      setValue(value)
      onChange?.(value)
    }
  }, [])

  const increment = useCallback(() => {
    handleChange(value + 1)
  }, [value])

  const decrement = useCallback(() => {
    handleChange(value - 1)
  }, [value])

  return (
    <BorderlessCounter
      label={label}
      value={value}
      readOnly
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <AddCircleOutlineIcon onClick={increment} data-testid={`${testId}-increment`} />
            <RemoveCircleOutlineIcon onClick={decrement} data-testid={`${testId}-decrement`} />
          </InputAdornment>
        ),
      }}
      data-testid={testId}
    />
  )
}
