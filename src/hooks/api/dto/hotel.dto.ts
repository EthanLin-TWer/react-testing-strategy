import { HotelResponse, Position, RoomType, StarRating } from '../../../api-client/hotels/response.types'

export interface HotelDTO {
  id: string
  name: string
  leastAvailablePrice: number
  roomTypes?: RoomType[]
  userRating: number
  noOfUserRatings: number
  starRating: StarRating
  imgSrc: string
  tags: string[]
  position: Position
}

// for entity DTO, spread the data (to support direct access) and add behaviors here
export const toHotelDto = (hotel: HotelResponse): HotelDTO => {
  return { ...hotel }
}
