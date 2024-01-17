import { screen } from '@testing-library/react'
import { parseText } from '../component-testers/_base.tester'
import { within } from '@testing-library/dom'
import { findRating } from '../component-testers/rating.tester'

const HotelTester = (element: HTMLElement) => {
  const getHotelName = () => parseText(within(element).getByTestId('hotel-name'))
  const getHotelPosition = () => parseText(within(element).getByTestId('hotel-position'))
  const getProposingPrice = () => parseText(within(element).getByTestId('proposed-price'))
  const getHotelStar = () => {
    return findRating('hotel-star', element).getRating()
  }
  const getUserRating = () => parseText(within(element).getByTestId('user-ratings'))
  const getNoOfUserRating = () => parseText(within(element).getByTestId('no-of-user-ratings'))
  const getDetails = () => [
    getHotelName(),
    getHotelPosition(),
    getHotelStar(),
    getUserRating(),
    getNoOfUserRating(),
    getProposingPrice(),
  ]

  return { getDetails }
}

export const getHotelList = () => {
  return screen
    .getAllByTestId('hotel-item')
    .map(HotelTester)
    .map((tester) => tester.getDetails())
}
