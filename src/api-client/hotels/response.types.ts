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

export interface Position {
  cityId: number
  area: string
  poi: string
  lat: string
  lng: string
  address: string
  cityName: string
}

export interface HotelResponse {
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

export interface PagedResult<T> {
  totalPages: number
  totalCounts: number
  data: T
}

export interface CityResponse {
  id: string
  name: string
}
