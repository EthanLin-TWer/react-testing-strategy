import { findSearchDropdown, SearchDropdownTester } from '../component-testers/search-dropdown.tester'
import { CounterTester, findCounter } from '../component-testers/counter.tester'
import { DateRangePickerTester, findDateRangePicker } from '../component-testers/date-range-picker.tester'

export const getDestinationField = (): SearchDropdownTester => {
  return findSearchDropdown('destination')
}

export const getCheckinPeriodField = (): DateRangePickerTester => {
  return findDateRangePicker('checkin-period')
}
export const getOccupancyField = (): CounterTester => {
  return findCounter('occupancy')
}

export const getSearchButton = () => {}
