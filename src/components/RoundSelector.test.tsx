import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import RoundSelector from './RoundSelector'
import { SyntheticEvent } from 'react'

test('renders round selector dialog modal', async () => {
  render(
    <RoundSelector
      toggleDialogViewer={function (arg1: string, arg2: boolean): void {
        throw new Error('Function not implemented.')
      }}
      handleCancel={function (
        event: SyntheticEvent<unknown>,
        reason?: string
      ): void {
        throw new Error('Function not implemented.')
      }}
    />
  )
  const selectRounds = screen.getByText(/How many rounds/i)
  expect(selectRounds).toBeInTheDocument()
})
