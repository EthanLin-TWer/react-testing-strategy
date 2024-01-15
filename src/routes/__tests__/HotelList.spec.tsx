import axios from 'axios'
import { allHotels } from '../../mocks/responses/hotel.mock'
import { renderHotelList } from '../../../test-setup/render'
import { HotelList } from '../HotelList'
import { waitFor } from '@testing-library/dom'
import { getHotelList } from './business-testers/hotel-list.tester'

describe.only('hotels list', () => {
  describe('search result', () => {
    beforeEach(() => {
      // setup axios mock response
      axios.get = jest.fn().mockImplementationOnce(async () => ({
        data: {
          totalPages: 1,
          totalCounts: 2,
          data: allHotels.slice(0, 2),
        },
      }))
    })

    afterEach(() => {})

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
        ['杭州中山西子湖酒店', '西湖湖滨商圈', '5星级', '用户评分：4.7', '3178条点评', '￥498起'],
      ])
    })
  })
})
