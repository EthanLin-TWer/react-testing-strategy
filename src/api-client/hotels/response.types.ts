export type StarRating = 1 | 2 | 3 | 4 | 5
enum Facility {
  WIFI = 'wifi',
}

export interface RoomType {
  id: string
  classification: string
  facilities: Facility[]
  areas: number
  maximumAllowedOccupancies: number
  price: number
}

export interface HotelResponse {
  id: string
  leastAvailablePrice: number
  roomTypes?: RoomType[]
  userRating: number
  noOfUserRatings: number
  starRating: StarRating
  imgSrc: string
}

export interface PagedResult<T> {
  totalPages: number
  totalCounts: number
  data: T
}

export interface CityResponse {
  id: string
  name: string
}
