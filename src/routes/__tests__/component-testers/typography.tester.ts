import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { parseText } from './_base.tester'

export interface TypographyTester {
  getText(): string
}

export const findTypography = (testId: string): TypographyTester => {
  // implementation details
  const getElement = () => screen.getByTestId(testId)

  // public interfaces
  const getText = () => parseText(getElement())

  return { getText }
}
