import { renderRouteComponent } from '../../../test-setup/render'
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
      renderRouteComponent(<HotelSearch />) // SearchPage fetches data on its own
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
      expect(getSearchButton().getValue()).toBe('Search')
    })

    it('searching fields should have default values so we give user an example, allowing them to navigate to the search result page asap', async () => {
      renderRouteComponent(<HotelSearch />)

      expect(getDestinationField().getValue()).toBe('北京')
      expect(getCheckinPeriodField().getDisplayText()).toBe('2024/01/15 -- 1晚 -- 2024/01/16')
      expect(getOccupancyField().getValue()).toBe(1)
    })

    describe('editing', () => {
      it('user should be able to edit searching destination - I am indeed planning a travel to Hangzhou', async () => {
        renderRouteComponent(<HotelSearch />)
        await getDestinationField().select('杭州')

        expect(getDestinationField().getValue()).toBe('杭州')
      })

      it('user should be able to increase no. of occupancies', async () => {
        renderRouteComponent(<HotelSearch />)

        await getOccupancyField().clickToIncrement()
        expect(getOccupancyField().getValue()).toBe(2)

        await getOccupancyField().clickToIncrement()
        expect(getOccupancyField().getValue()).toBe(3)
      })

      it('user should be able to decrease no. of occupancies', async () => {
        renderRouteComponent(<HotelSearch />)

        await getOccupancyField().clickToIncrement()
        expect(getOccupancyField().getValue()).toBe(2)

        await getOccupancyField().clickToDecrement()
        expect(getOccupancyField().getValue()).toBe(1)
      })

      it('user should be able to extend reservation time and see how many days of money they need to pay', async () => {
        renderRouteComponent(<HotelSearch />)

        await getCheckinPeriodField().selectStartDate('2024-01-16')
        await getCheckinPeriodField().selectEndDate('2024-01-21')

        expect(getCheckinPeriodField().getDisplayText()).toBe('2024/01/16 -- 5晚 -- 2024/01/21')
      })
    })

    it('should call search endpoint with correct parameters: city id, check dates in yyyy-MM-dd, and no. of occupancies', async () => {
      renderRouteComponent(<HotelSearch />)

      await getDestinationField().select('杭州')
      await getCheckinPeriodField().selectStartDate('2024-01-20')
      await getCheckinPeriodField().selectEndDate('2024-01-28')
      await getOccupancyField().clickToIncrement()
      await getSearchButton().click()

      expect(window.location.pathname).toBe('/hotels/list')
      expect(window.location.search).toBe('?city=HZ&checkinDate=2024-01-20&checkoutDate=2024-01-28&noOfOccupancies=2')
    })
  })
})
