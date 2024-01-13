import React, { SyntheticEvent } from 'react'
import { Autocomplete, TextField } from '@mui/material'

interface SearchDropdownProps {
  label: string
  options: string[]
  onChange?: (value: string) => void
  defaultValue?: string
  testId?: string
}

export const SearchDropdown = ({ testId, label, options, defaultValue, onChange }: SearchDropdownProps) => {
  const handleChange = (event: SyntheticEvent, value: string) => {
    onChange?.(value)
  }

  return (
    <Autocomplete
      id={testId}
      options={options}
      defaultValue={defaultValue}
      onChange={handleChange}
      renderInput={(params) => {
        return <TextField {...params} label={label} data-testid={testId} />
      }}
      data-testid={`${testId}-container`}
      disablePortal
    />
  )
}
