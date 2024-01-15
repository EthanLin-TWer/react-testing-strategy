import { FC } from 'react'
import { HotelDTO } from '../../../hooks/api/dto/hotel.dto'

interface Props {
  hotel: HotelDTO
}

export const HotelItem: FC<Props> = ({ hotel }) => {
  return (
    <p>
      {hotel.id}: ${hotel.leastAvailablePrice}
    </p>
  )
}
