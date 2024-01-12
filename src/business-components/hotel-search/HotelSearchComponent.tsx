import React from 'react'
import { Button } from '@mui/material'
import { SearchDropdown } from '../../ui-components/SearchDropdown/SearchDropdown'
import { Counter } from '../../ui-components/Counter/Counter'
import { DateRangePicker } from '../../ui-components/DatePicker/DateRangePicker'
import { useRecommendationCities } from '../../hooks/api/hotels'

export const HotelSearchComponent = () => {
  const recommendationCities = useRecommendationCities()

  return (
    <div>
      <SearchDropdown
        label="目的地/酒店名称"
        options={recommendationCities.map((city) => city.name)}
        testId="destination"
      />

      <DateRangePicker startLabel="入住时间" endLabel="退房时间" testId="checkin-period" />
      <Counter label="入住人数" min={1} defaultValue={1} testId="occupancy" />
      <Button variant="contained" data-testid="search">
        Search
      </Button>
    </div>
  )
}
