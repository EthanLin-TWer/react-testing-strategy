import React from 'react'
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'

interface DropdownOption {
  id: string
  value: string
}

interface SearchDropdownProps {
  label: string
  options: DropdownOption[]
  testId?: string
}

export const SearchDropdown = ({ testId, label, options }: SearchDropdownProps) => {
  return (
    <FormControl fullWidth>
      <InputLabel id={testId} data-testid={`${testId}-label`} readOnly>
        {label}
      </InputLabel>
      <Select labelId={testId} label={label} defaultValue="BJ" data-testid={testId}>
        {options.map(({ id, value }: DropdownOption) => (
          <MenuItem key={id} value={id}>
            {value}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}
