import React from 'react'
import { Button, InputAdornment, TextField } from '@mui/material'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3'
import { SearchDropdown } from '../../ui-components/SearchDropdown/SearchDropdown'
import { Counter } from '../../ui-components/Counter/Counter'

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

      <Counter label="入住人数" min={1} defaultValue={1} testId="occupancy" />

      <Button variant="contained">Search</Button>
    </div>
  )
}
