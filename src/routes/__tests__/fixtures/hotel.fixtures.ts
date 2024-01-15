import merge from 'lodash/merge'

import { hotelMocks } from '../../../mocks/responses/hotel.mock'
import { HotelResponse } from '../../../api-client/hotels/response.types'

export const exampleTwoHotels = hotelMocks.slice(0, 2)

export const createHotel = (hotel: HotelResponse, customization: Partial<HotelResponse>): HotelResponse => {
  return merge(hotel, customization)
}
