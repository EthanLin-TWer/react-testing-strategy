import axios from 'axios'
import { waitFor } from '@testing-library/dom'
import { renderHotelList } from '../../../test-setup/render'

import { hotelMocks } from '../../mocks/responses/hotel.mock'
import { HotelList } from '../HotelList'
import { getHotelList } from './business-testers/hotel-list.tester'
import { HotelListPageDSL } from './api-mocks/hotel-list.dsl'
import { exampleTwoHotels, createHotel } from './fixtures/hotel.fixtures'

describe('hotels list', () => {
  let hotelListPageDSL: HotelListPageDSL

  describe('search result', () => {
    beforeEach(() => {
      hotelListPageDSL = new HotelListPageDSL()
      hotelListPageDSL.mockGetHotelListOnce(exampleTwoHotels)
    })

    afterEach(() => {
      hotelListPageDSL.reset()
    })

    it('should call search endpoint with correct parameters: city id, check dates in yyyy-MM-dd, and no. of occupancies', () => {
      renderHotelList(
        <HotelList />,
        '/hotels/list?city=HZ&checkinDate=2024-01-20&checkoutDate=2024-01-28&noOfOccupancies=2'
      )

      expect(axios.get).toHaveBeenCalledWith('/hotels', {
        params: {
          checkinDate: '2024-01-20',
          checkoutDate: '2024-01-28',
          city: 'HZ',
          noOfOccupancies: 2,
        },
      })
    })

    it(
      'should render available hotels once loaded with correct information:' +
        'hotel name, address, stars, user rating, number of user ratings and lowest price',
      () => {
        renderHotelList(
          <HotelList />,
          '/hotels/list?city=HZ&checkinDate=2024-01-20&checkoutDate=2024-01-28&noOfOccupancies=2'
        )

        expect(getHotelList()).toEqual([
          ['杭州栖湖轻奢酒店', '西湖湖滨商圈', '★★★★', '用户评分：4.2', '930条点评', '￥198 起'],
          ['杭州中山西子湖酒店', '西湖湖滨商圈', '★★★★★', '用户评分：4.7', '317条点评', '￥498 起'],
        ])
      }
    )

    it('should show "≤100 comments" when no. of user ratings are less than 100', async () => {
      hotelListPageDSL.mockGetHotelListOnce([
        createHotel(hotelMocks[9], { name: '杭州华辰国际饭店', noOfUserRatings: 96 }),
      ])

      renderHotelList(
        <HotelList />,
        '/hotels/list?city=HZ&checkinDate=2024-01-20&checkoutDate=2024-01-28&noOfOccupancies=2'
      )

      await waitFor(() => {
        expect(getHotelList()).toEqual([
          ['杭州华辰国际饭店', '西湖湖滨商圈', '★★★★', '用户评分：4.5', '≤100条点评', '￥357 起'],
        ])
      })
    })

    it('should add thousand separator to user ratings (e.g. 10,000条评论)', async () => {
      hotelListPageDSL.mockGetHotelListOnce([
        createHotel(hotelMocks[4], { name: '杭州马可波罗滨湖酒店', noOfUserRatings: 10000 }),
      ])

      renderHotelList(
        <HotelList />,
        '/hotels/list?city=HZ&checkinDate=2024-01-20&checkoutDate=2024-01-28&noOfOccupancies=2'
      )

      await waitFor(() => {
        expect(getHotelList()).toEqual([
          ['杭州马可波罗滨湖酒店', '西湖湖滨商圈', '★★★★', '用户评分：4.7', '10,000条点评', '￥273 起'],
        ])
      })
    })
  })
})
