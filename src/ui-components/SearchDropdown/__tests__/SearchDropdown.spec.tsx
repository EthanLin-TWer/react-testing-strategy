import { render } from '@testing-library/react'
import {
  findSearchDropdown,
  SearchDropdownTester,
} from '../../../routes/__tests__/component-testers/search-dropdown.tester'
import { SearchDropdown } from '../SearchDropdown'

const testId = 'search-dropdown'
describe('UI Components - Search Dropdown', () => {
  const movies = [
    'Bicycle Thieves',
    'To Kill a Mockingbird',
    '2001: A Space Odyssey',
    'Amadeus',
    'Toy Story',
    '3 Idiots',
    'Logan',
  ]
  describe('default value', () => {
    it('should render initial value to 0 when no defaultValue is provided', () => {})

    it('should render default value when provided', () => {})
  })

  describe('functionality', () => {
    it('should be able to increment', () => {})

    it('should be able to decrement', () => {})
  })

  it('should render label', () => {
    render(<SearchDropdown label="Dropdown label" options={movies} testId={testId} />)

    const dropdown: SearchDropdownTester = findSearchDropdown(testId)

    expect(dropdown.getLabel()).toBe('Dropdown label')
  })

  it('should leave value empty when default value is not provided', () => {
    render(<SearchDropdown label="Dropdown label" options={movies} testId={testId} />)

    const dropdown: SearchDropdownTester = findSearchDropdown(testId)

    expect(dropdown.getValue()).toBe('')
  })

  it('should select default value when provided', () => {
    render(<SearchDropdown label="Dropdown label" options={movies} defaultValue={movies[0]} testId={testId} />)

    const dropdown: SearchDropdownTester = findSearchDropdown(testId)

    expect(dropdown.getValue()).toBe('Bicycle Thieves')
  })

  it('should render options', async () => {
    render(<SearchDropdown label="Dropdown label" options={movies} testId={testId} />)

    const dropdown: SearchDropdownTester = findSearchDropdown(testId)

    expect(await dropdown.getOptions()).toEqual(movies)
  })

  it('should call onChange when provided', async () => {
    const onChange = jest.fn()
    render(<SearchDropdown label="Dropdown label" options={movies} testId={testId} onChange={onChange} />)

    const dropdown: SearchDropdownTester = findSearchDropdown(testId)
    await dropdown.select('Bicycle Thieves')

    expect(dropdown.getValue()).toBe('Bicycle Thieves')
    expect(onChange).toHaveBeenCalledWith('Bicycle Thieves')
  })
})
