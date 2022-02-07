import { SyntheticEvent } from 'react'
import { Button, DialogActions, DialogTitle } from '@mui/material'
import { useSimParams } from '../context/SimContext'

const SwitchDoors = ({
  handleCancel,
  toggleDialogViewer,
}: ItoggleDialogViewer) => {
  const simParams = useSimParams()

  const handleChange = (e: SyntheticEvent<HTMLButtonElement>) => {
    if (e.currentTarget.name === 'yes') {
      simParams?.dispatch({
        type: 'setSimParams',
        payload: { rounds: simParams.state.rounds, switch: true },
      })
    }
    if (e.currentTarget.name === 'no') {
      simParams?.dispatch({
        type: 'setSimParams',
        payload: { rounds: simParams.state.rounds, switch: false },
      })
    }
    toggleDialogViewer('switchSelector', false)
    toggleDialogViewer('resultsView', true)
  }

  return (
    <>
      <DialogTitle sx={{ textAlign: 'center' }}>Switch Doors?</DialogTitle>
      <DialogActions>
        <Button onClick={handleCancel} variant='outlined'>
          Cancel
        </Button>
        <Button
          name='yes'
          color='success'
          onClick={handleChange}
          variant='outlined'
        >
          Yes
        </Button>
        <Button
          name='no'
          color='error'
          onClick={handleChange}
          variant='outlined'
        >
          No
        </Button>
      </DialogActions>
    </>
  )
}

export default SwitchDoors
