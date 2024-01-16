import { FC } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useSearchHotels } from '../../hooks/api/useHotels'
import { HotelDTO } from '../../hooks/api/dto/hotel.dto'
import { HotelItem } from './components/HotelItem'

export const HotelListComponent: FC = () => {
  const [params] = useSearchParams()

  const { hotels, isLoading } = useSearchHotels({
    city: params.get('city')!,
    checkinDate: params.get('checkinDate')!,
    checkoutDate: params.get('checkoutDate')!,
    noOfOccupancies: Number(params.get('noOfOccupancies')!),
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
