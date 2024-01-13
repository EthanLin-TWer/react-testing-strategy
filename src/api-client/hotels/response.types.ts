type StarRating = 1 | 2 | 3 | 4 | 5
enum Facility {
  WIFI = 'wifi',
}

interface RoomType {
  classification: string
  facilities: Facility[]
  areas: number
  maximumAllowedOccupancies: number
  price: number
}

export interface HotelResponse {
  leastAvailablePrice: number
  roomTypes: RoomType[]
  userRating: number
  noOfUserRatings: number
  starRating: StarRating
  imgSrc: string
}
