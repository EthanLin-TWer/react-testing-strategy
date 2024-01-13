import React, { useState } from 'react'
import { Button } from '@mui/material'
import { addDays, format } from 'date-fns'

import { SearchDropdown } from '../../ui-components/SearchDropdown/SearchDropdown'
import { Counter } from '../../ui-components/Counter/Counter'
import { DateRangePicker } from '../../ui-components/DatePicker/DateRangePicker'
import { useRecommendationCities, useSearchHotels } from '../../hooks/api/useHotels'

export const HotelSearchComponent = () => {
  const recommendationCities = useRecommendationCities()

  const defaultedAsChinaCapital = recommendationCities.findByName('北京')!
  const [city, setCity] = useState(defaultedAsChinaCapital)
  const onDestinationChanged = (cityName: string) => {
    const cityFound = recommendationCities.findByName(cityName)
    if (cityFound) {
      setCity(cityFound!)
    }
  }

  const defaultCheckinDay = new Date()
  const defaultCheckoutDay = addDays(defaultCheckinDay, 1)
  const [[checkinDate, checkoutDate], setCheckinPeriod] = useState<[Date, Date]>([
    defaultCheckinDay,
    defaultCheckoutDay,
  ])
  const onCheckinPeriodChange = (startDate: Date, endDate: Date) => {
    setCheckinPeriod([startDate, endDate])
  }

  const [noOfOccupancies, setNoOfOccupancies] = useState<number>(1)

  const { hotels, triggerSearchHotel } = useSearchHotels({
    city: city.id,
    checkinDate: format(checkinDate, 'yyyy-MM-dd'),
    checkoutDate: format(checkoutDate, 'yyyy-MM-dd'),
    noOfOccupancies,
  })

  return (
    <div>
      <SearchDropdown
        label="目的地/酒店名称"
        options={recommendationCities.getNames()}
        defaultValue={defaultedAsChinaCapital.name}
        onChange={onDestinationChanged}
        testId="destination"
      />

      <DateRangePicker
        startLabel="入住时间"
        endLabel="退房时间"
        defaultStartDate={defaultCheckinDay}
        defaultEndDate={defaultCheckoutDay}
        onChange={onCheckinPeriodChange}
        testId="checkin-period"
      />

      <Counter label="入住人数" min={1} defaultValue={1} onChange={setNoOfOccupancies} testId="occupancy" />

      <Button variant="contained" onClick={triggerSearchHotel} data-testid="search">
        Search
      </Button>
    </div>
  )
}
