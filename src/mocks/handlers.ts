import { http, HttpResponse } from 'msw'
import { allHotels } from './responses/all-lots'
import { HotelResponse } from '../api-client/hotels/response.types'

export const handlers = [
  http.get('/hotels', ({ request }) => {
    const { searchParams } = new URL(request.url)

    const page = Number(searchParams.get('page')) || 1
    const city = searchParams.get('city')
    const checkinDate = searchParams.get('checkinDate')
    const checkoutDate = searchParams.get('checkoutDate')
    const noOfOccupancies = Number(searchParams.get('noOfOccupancies'))

    const data = allHotels
      .filter((hotel: HotelResponse) => {
        return true
      })
      .slice(15 * (page - 1), 15 * page)

    return HttpResponse.json({
      data,
      totalPages: Math.ceil(allHotels.length / 15),
      totalCounts: allHotels.length,
    })
  }),
]
