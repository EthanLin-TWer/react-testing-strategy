import React from 'react'
import { Button, InputAdornment, TextField } from '@mui/material'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline'
import { SearchDropdown } from '../../ui-components/SearchDropdown/SearchDropdown'

export const HotelSearchComponent = () => {
  return (
    <div>
      <SearchDropdown
        label="目的地/酒店名称"
        options={[
          { id: 'BJ', value: '北京' },
          { id: 'SH', value: '上海' },
          { id: 'GZ', value: '广州' },
          { id: 'SZ', value: '深圳' },
          { id: 'CD', value: '成都' },
          { id: 'CQ', value: '重庆' },
          { id: 'HZ', value: '杭州' },
          { id: 'WH', value: '武汉' },
        ]}
        testId="destination"
      />

      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker />
      </LocalizationProvider>

      <TextField
        label="入住人数"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <AddCircleOutlineIcon />
              <RemoveCircleOutlineIcon />
            </InputAdornment>
          ),
        }}
      />
      <Button variant="contained">Search</Button>
    </div>
  )
}
