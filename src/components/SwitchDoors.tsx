import { SyntheticEvent, useEffect, useState } from 'react'
import { Button, Dialog, DialogActions, DialogTitle } from '@mui/material'
import Results from './Results'

type SwitchDoorProps = {
  open: boolean
  rounds: number
}
const SwitchDoors = ({ open, rounds }: SwitchDoorProps) => {
  const [switchOpen, setSwitchOpen] = useState<boolean>(false)
  const [simParams, setSimParams] = useState<{
    rounds: number
    switch: boolean
  }>({ rounds: 0, switch: false })

  useEffect(() => {
    rounds > 0 && !open && setSwitchOpen(true)
  }, [open, rounds])

  const handleClose = (event: SyntheticEvent<unknown>, reason?: string) => {
    if (reason !== 'backdropClick') {
      setSwitchOpen(false)
    }
  }

  const handleChange = (e: SyntheticEvent<HTMLButtonElement>) => {
    let data = { rounds: 0, switch: false }
    if (e.currentTarget.name === 'yes') {
      data = { rounds: rounds, switch: true }
    }
    if (e.currentTarget.name === 'no') {
      data = { rounds: rounds, switch: false }
    }
    setSimParams(data)
    setSwitchOpen(false)
  }

  return (
    <>
      <Dialog disableEscapeKeyDown open={switchOpen} onClose={handleClose}>
        <DialogTitle sx={{ textAlign: 'center' }}>Switch Doors?</DialogTitle>
        <DialogActions>
          <Button onClick={handleChange} variant='outlined'>
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
      </Dialog>
      <Results simParams={simParams} switchOpen={switchOpen} />
    </>
  )
}

export default SwitchDoors
