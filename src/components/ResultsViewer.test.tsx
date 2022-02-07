import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import ResultsViewer from './ResultsViewer'
import { SyntheticEvent } from 'react'

test('renders results modal', async () => {
  render(
    <ResultsViewer
      handleCancel={function (
        event: SyntheticEvent<unknown, Event>,
        reason?: string
      ): void {
        throw new Error('Function not implemented.')
      }}
    />
  )
  const startButton = screen.getByText(/results/i)
  expect(startButton).toBeInTheDocument()
})
