import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@mui/material'
import { addDays, format } from 'date-fns'

import { SearchDropdown } from '../../ui-components/SearchDropdown/SearchDropdown'
import { Counter } from '../../ui-components/Counter/Counter'
import { DateRangePicker } from '../../ui-components/DateRangePicker/DateRangePicker'
import { useRecommendationCities, useSearchHotels } from '../../hooks/api/useHotels'

export const HotelSearchComponent = () => {
  const recommendationCities = useRecommendationCities()
  const navigate = useNavigate()

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

  const onSearch = () => {
    const checkinDateString: string = format(checkinDate, 'yyyy-MM-dd')
    const checkoutDateString = format(checkoutDate, 'yyyy-MM-dd')

    navigate(
      `/hotels/list?city=${city.id}&checkinDate=${checkinDateString}&checkoutDate=${checkoutDateString}&noOfOccupancies=${noOfOccupancies}`
    )
  }

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

      <Button variant="contained" onClick={onSearch} data-testid="search">
        Search
      </Button>
    </div>
  )
}
