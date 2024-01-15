import { delay, http, HttpResponse } from 'msw'
import { hotelMocks } from './responses/hotel.mock'
import { HotelResponse } from '../api-client/hotels/response.types'

export const handlers = [
  http.get('/hotels', async ({ request }) => {
    const { searchParams } = new URL(request.url)

    const page = Number(searchParams.get('page')) || 1
    const city = searchParams.get('city')
    const checkinDate = searchParams.get('checkinDate')
    const checkoutDate = searchParams.get('checkoutDate')
    const noOfOccupancies = Number(searchParams.get('noOfOccupancies'))

    const data = hotelMocks.filter((hotel: HotelResponse) => true).slice(15 * (page - 1), 15 * page)

    await delay(1.5 * 1000)

    return HttpResponse.json({
      data,
      totalPages: Math.ceil(hotelMocks.length / 15),
      totalCounts: hotelMocks.length,
    })
  }),
]
