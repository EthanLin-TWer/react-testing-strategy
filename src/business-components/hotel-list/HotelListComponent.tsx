import { FC } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useOnMount } from '../../hooks/useOnMount'
import { useSearchHotels } from '../../hooks/api/useHotels'
import { HotelDTO } from '../../hooks/api/dto/hotel.dto'
import { HotelItem } from './components/HotelItem'

export const HotelListComponent: FC = () => {
  const [params] = useSearchParams()
  const city = params.get('city')!
  const checkinDate = params.get('checkinDate')!
  const checkoutDate = params.get('checkoutDate')!
  const noOfOccupancies = params.get('noOfOccupancies')!

  const { hotels, isLoading } = useSearchHotels({
    city,
    checkinDate,
    checkoutDate,
    noOfOccupancies: Number(noOfOccupancies),
  })

  if (isLoading) {
    return <p>is loading....</p>
  }

  return (
    <div>
      <h3>Hotel List</h3>
      {hotels.map((hotel: HotelDTO) => (
        <HotelItem key={hotel.id} hotel={hotel} />
      ))}
    </div>
  )
}
