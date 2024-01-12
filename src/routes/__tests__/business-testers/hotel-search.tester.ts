import { findSearchDropdown, SearchDropdownTester } from '../component-testers/search-dropdown.tester'

export const getDestinationField = (): SearchDropdownTester => {
  return findSearchDropdown('destination')
}

export const getCheckinDateField = () => {}

export const getCheckoutDateField = () => {}

export const getOccupancyField = () => {}

export const getSearchButton = () => {}
