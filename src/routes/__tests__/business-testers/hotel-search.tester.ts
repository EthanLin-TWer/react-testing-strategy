import { findSearchDropdown, SearchDropdownTester } from '../component-testers/search-dropdown.tester'
import { CounterTester, findCounter } from '../component-testers/counter.tester'

export const getDestinationField = (): SearchDropdownTester => {
  return findSearchDropdown('destination')
}

export const getCheckinDateField = () => {}

export const getCheckoutDateField = () => {}

export const getOccupancyField = (): CounterTester => {
  return findCounter('occupancy')
}

export const getSearchButton = () => {}
