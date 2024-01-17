import { screen } from '@testing-library/react'
import { within } from '@testing-library/dom'

export interface RatingTester {
  getRating(): string
}

export const findRating = (testId: string, wrapper: HTMLElement): RatingTester => {
  // implementation details
  const getElement = () => {
    return within(wrapper).getByTestId(testId)
  }

  // public interfaces
  const getRating = (): string => {
    // format of this will be '1 Star', '2 Stars', ..., 'n Stars'
    const ariaLabel: string | null = getElement().getAttribute('aria-label')!
    const numberOfStars = Number(ariaLabel.match(/(\d*)/)![0])
    return Array(numberOfStars).fill('★').join('')
  }

  return { getRating }
}
