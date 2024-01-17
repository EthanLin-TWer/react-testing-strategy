import { renderRouteComponent } from '../../../test-setup/render'
import { HotelSearch } from '../HotelSearch'
import {
  getCheckinPeriodField,
  getDestinationField,
  getOccupancyField,
  getSearchButton,
} from './business-testers/hotel-search.tester'
import { SearchDropdownTester } from './component-testers/search-dropdown.tester'

describe('search hotels - entry', () => {
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

  it('searching fields should have default values (so we give user an example, allowing them to navigate to the search result page asap)', async () => {
    renderRouteComponent(<HotelSearch />)

    expect(getDestinationField().getValue()).toBe('北京')
    expect(getCheckinPeriodField().getDisplayText()).toBe('2024/01/17 1晚 2024/01/18')
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

      await getCheckinPeriodField().selectStartDate('2024-01-18')
      await getCheckinPeriodField().selectEndDate('2024-01-23')

      expect(getCheckinPeriodField().getDisplayText()).toBe('2024/01/18 5晚 2024/01/23')
    })
  })

  it('should navigate to hotel list page with searching criteria', async () => {
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
