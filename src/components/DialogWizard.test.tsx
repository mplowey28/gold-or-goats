import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import DialogWizard from './DialogWizard'

test('renders start game button', async () => {
  render(<DialogWizard />)
  const startButton = screen.getByText(/start a new game/i)
  expect(startButton).toBeInTheDocument()
})
