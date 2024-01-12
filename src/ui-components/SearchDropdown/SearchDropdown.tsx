import React from 'react'
import { Autocomplete, TextField } from '@mui/material'

interface SearchDropdownProps {
  label: string
  options: string[]
  testId?: string
}

export const SearchDropdown = ({ testId, label, options }: SearchDropdownProps) => {
  return (
    <Autocomplete
      id={testId}
      options={options}
      defaultValue="北京"
      renderInput={(params) => {
        return <TextField {...params} label={label} data-testid={testId} />
      }}
      data-testid={`${testId}-container`}
      disablePortal
    />
  )
}
