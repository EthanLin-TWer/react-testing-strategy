import React, { SyntheticEvent } from 'react'
import { TextField } from '@mui/material'

import { BorderlessAutocomplete } from './styles'

interface SearchDropdownProps {
  label: string
  options: string[]
  value?: string
  onChange?: (value: string) => void
  defaultValue?: string
  testId?: string
}

export const SearchDropdown = ({ testId, label, options, defaultValue, onChange, value }: SearchDropdownProps) => {
  const handleChange = (event: SyntheticEvent, value: string) => {
    if (onChange) {
      onChange(value)
    }
  }

  return (
    <BorderlessAutocomplete
      id={testId}
      options={options}
      defaultValue={defaultValue}
      value={value}
      onChange={handleChange}
      renderInput={(params: any) => {
        return <TextField {...params} label={label} data-testid={testId} />
      }}
      data-testid={`${testId}-container`}
      disablePortal
    />
  )
}
