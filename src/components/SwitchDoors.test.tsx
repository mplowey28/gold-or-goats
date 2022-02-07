import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import SwitchDoors from './SwitchDoors'
import { SyntheticEvent } from 'react'

test('renders switch doors modal', async () => {
  render(
    <SwitchDoors
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
  const startButton = screen.getByText(/Switch Doors?/i)
  expect(startButton).toBeInTheDocument()
})
