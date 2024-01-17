import { FC } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useRecommendationCities, useSearchHotels } from '../../hooks/api/useHotels'
import { SearchBarOnTop } from './components/SearchBarOnTop'
import { Hotels } from './components/Hotels'

export const HotelListComponent: FC = () => {
  const [params] = useSearchParams()

  const city = params.get('city')!
  const checkinDate = params.get('checkinDate')!
  const checkoutDate = params.get('checkoutDate')!
  const noOfOccupancies = Number(params.get('noOfOccupancies')!)
  const recommendationCities = useRecommendationCities()
  const { hotels, isLoading } = useSearchHotels({
    city,
    checkinDate,
    checkoutDate,
    noOfOccupancies,
  })

  return (
    <>
      <SearchBarOnTop
        city={recommendationCities.findById(city)!.name}
        checkoutDate={checkoutDate}
        checkinDate={checkinDate}
        noOfOccupancies={noOfOccupancies}
      />

      <Hotels hotels={hotels} isLoading={isLoading} />
    </>
  )
}
