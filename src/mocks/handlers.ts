import { delay, http, HttpResponse } from 'msw'
import { allHotels } from './responses/all-lots'
import { HotelResponse } from '../api-client/hotels/response.types'

export const handlers = [
  http.get('/hotels', async ({ request }) => {
    const { searchParams } = new URL(request.url)

    const page = Number(searchParams.get('page')) || 1
    const city = searchParams.get('city')
    const checkinDate = searchParams.get('checkinDate')
    const checkoutDate = searchParams.get('checkoutDate')
    const noOfOccupancies = Number(searchParams.get('noOfOccupancies'))

    const data = allHotels.filter((hotel: HotelResponse) => true).slice(15 * (page - 1), 15 * page)

    await delay(1.5 * 1000)

    return HttpResponse.json({
      data,
      totalPages: Math.ceil(allHotels.length / 15),
      totalCounts: allHotels.length,
    })
  }),
]
