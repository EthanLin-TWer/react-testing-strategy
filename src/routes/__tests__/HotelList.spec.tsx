import axios from 'axios'
import { waitFor } from '@testing-library/dom'
import { renderHotelList } from '../../../test-setup/render'

import { allHotels } from '../../mocks/responses/hotel.mock'
import { HotelList } from '../HotelList'
import { getHotelList } from './business-testers/hotel-list.tester'

describe.only('hotels list', () => {
  describe('search result', () => {
    beforeEach(() => {
      axios.get = jest.fn().mockImplementationOnce(async () => ({
        data: { data: allHotels.slice(0, 2), totalPages: 1, totalCounts: 2 },
      }))
    })

    afterEach(() => {
      jest.clearAllMocks()
    })

    it('should call search endpoint with correct parameters: city id, check dates in yyyy-MM-dd, and no. of occupancies', () => {
      renderHotelList(
        <HotelList />,
        '/hotels/list?city=HZ&checkinDate=2024-01-20&checkoutDate=2024-01-28&noOfOccupancies=2'
      )

      expect(axios.get).toHaveBeenCalledWith('/hotels', {
        params: { checkinDate: '2024-01-20', checkoutDate: '2024-01-28', city: 'HZ', noOfOccupancies: 2 },
      })
    })

    it('should render available hotels once loaded with information: 酒店名、地址、星级、用户评分、点评数、报价等', () => {
      renderHotelList(
        <HotelList />,
        '/hotels/list?city=HZ&checkinDate=2024-01-20&checkoutDate=2024-01-28&noOfOccupancies=2'
      )

      expect(getHotelList()).toEqual([
        ['杭州栖湖轻奢酒店', '西湖湖滨商圈', '4星级', '用户评分：4.2', '930条点评', '￥198起'],
        ['杭州中山西子湖酒店', '西湖湖滨商圈', '5星级', '用户评分：4.7', '317条点评', '￥498起'],
      ])
    })

    it('should show "≤100 comments" when no. of user ratings are less than 100', async () => {
      axios.get = jest.fn().mockImplementationOnce(async () => ({
        data: { data: [allHotels[10]], totalPages: 1, totalCounts: 1 },
      }))

      renderHotelList(
        <HotelList />,
        '/hotels/list?city=HZ&checkinDate=2024-01-20&checkoutDate=2024-01-28&noOfOccupancies=2'
      )

      await waitFor(() => {
        expect(getHotelList()).toEqual([
          ['杭州西湖柒号酒店式公寓', '西湖湖滨商圈', '3星级', '用户评分：4.4', '≤100条点评', '￥249起'],
        ])
      })
    })

    it('should add thousand separator to user ratings (e.g. 10,000条评论)', async () => {
      axios.get = jest.fn().mockImplementationOnce(async () => ({
        data: { data: [allHotels[4]], totalPages: 1, totalCounts: 1 },
      }))

      renderHotelList(
        <HotelList />,
        '/hotels/list?city=HZ&checkinDate=2024-01-20&checkoutDate=2024-01-28&noOfOccupancies=2'
      )

      await waitFor(() => {
        expect(getHotelList()).toEqual([
          ['杭州马可波罗滨湖酒店(西湖湖滨店)', '西湖湖滨商圈', '4星级', '用户评分：4.7', '10,288条点评', '￥273起'],
        ])
      })
    })
  })
})
