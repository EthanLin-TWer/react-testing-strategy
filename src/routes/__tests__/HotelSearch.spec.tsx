import { render } from '@testing-library/react'
import { HotelSearch } from '../HotelSearch'
import {
  getCheckinPeriodField,
  getDestinationField,
  getOccupancyField,
  getSearchButton,
} from './business-testers/hotel-search.tester'
import { SearchDropdownTester } from './component-testers/search-dropdown.tester'

describe('search hotels', () => {
  describe('search entry - home page', () => {
    beforeEach(() => {
      // // given ①
      // searchPageDSL.mockRecommendationCities([
      //   { id: 'BJ', name: '北京', }, { id: 'SH', name: '上海', },
      //   { id: 'GZ', name: '广州', }, { id: 'SZ', name: '深圳', },
      //   { id: 'CD', name: '成都', }, { id: 'CQ', name: '重庆', },
      //   { id: 'HZ', name: '杭州', }, { id: 'WH', name: '武汉', },
      // ])
    })

    afterEach(() => {
      // searchPageDSL.reset()
    })

    it('should render a search box that supports searching available hotels by destination, check-in period and number of occupancy', async () => {
      render(<HotelSearch />) // SearchPage fetches data on its own
      const destinationField: SearchDropdownTester = getDestinationField()

      expect(destinationField.getLabel()).toBe('目的地/酒店名称')
      expect(await destinationField.getOptions()).toEqual([
        '北京',
        '上海',
        '广州',
        '深圳',
        '成都',
        '重庆',
        '杭州',
        '武汉',
      ])

      expect(getCheckinPeriodField().getStartLabel()).toBe('入住时间')
      expect(getCheckinPeriodField().getEndLabel()).toBe('退房时间')

      expect(getOccupancyField().getLabel()).toBe('入住人数')
      // expect(getSearchButton().isPresent()).toBeTruthy()
    })
  })
})
