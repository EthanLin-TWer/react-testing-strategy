import { render } from '@testing-library/react'
import { Counter } from '../Counter'
import { findCounter } from '../../../routes/__tests__/component-testers/counter.tester'

const testId = 'counter'
describe('UI Components - Counter', () => {
  describe('default value', () => {
    it('should render initial value to 0 when no defaultValue is provided', () => {})

    it('should render default value when provided', () => {})
  })

  describe('functionality', () => {
    it('should be able to increment', () => {})

    it('should be able to decrement', () => {})
  })

  describe('min / max', () => {
    it('default value should not be less than the min value', () => {})

    it('default value should not be larger than the max value', () => {})

    it('should disable decrement when current value is already the min value', async () => {
      render(<Counter label="Hi" min={2} defaultValue={2} testId={testId} />)

      const counter = findCounter(testId)
      await counter.clickToDecrement()

      expect(counter.getValue()).toBe(2)
    })

    it('should min default to 0 when not provided', async () => {
      render(<Counter label="Hi" defaultValue={1} testId={testId} />)

      const counter = findCounter(testId)

      await counter.clickToDecrement()
      expect(counter.getValue()).toBe(0)

      await counter.clickToDecrement()
      expect(counter.getValue()).toBe(0)
    })

    it('should disable increment when current value is already the max value', () => {})
  })
})
