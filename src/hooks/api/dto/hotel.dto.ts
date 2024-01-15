import { HotelResponse, RoomType, StarRating } from '../../../api-client/hotels/response.types'

export interface HotelDTO {
  id: string
  roomTypes?: RoomType[]
  noOfUserRatings: number
  leastAvailablePrice: number
  starRating: StarRating
  imgSrc: string
  userRating: number
}

// for entity DTO, spread the data (to support direct access) and add behaviors here
export const toHotelDto = (hotel: HotelResponse): HotelDTO => {
  return { ...hotel }
}
