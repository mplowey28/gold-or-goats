import { SyntheticEvent, useEffect, useState } from 'react'
import { Box, Button, Dialog, DialogActions, DialogTitle } from '@mui/material'

type SwitchDoorProps = {
  open: boolean
  rounds: number
}
const SwitchDoors = ({ open, rounds }: SwitchDoorProps) => {
  const [switchOpen, setSwitchOpen] = useState(false)
  const [swtichDoors, setSwitchDoors] = useState<boolean>()

  useEffect(() => {
    rounds > 0 && !open && setSwitchOpen(true)
  }, [open, rounds])

  const handleClose = (event: SyntheticEvent<unknown>, reason?: string) => {
    if (reason !== 'backdropClick') {
      setSwitchOpen(false)
    }
  }
  const handleYes = (event: SyntheticEvent<unknown>, reason?: string) => {
    if (reason !== 'backdropClick') {
      setSwitchDoors(true)
      setSwitchOpen(false)
    }
  }
  const handleNo = (event: SyntheticEvent<unknown>, reason?: string) => {
    if (reason !== 'backdropClick') {
      setSwitchDoors(false)
      setSwitchOpen(false)
    }
  }

  return (
    <>
      <Dialog disableEscapeKeyDown open={switchOpen} onClose={handleClose}>
        <DialogTitle sx={{ textAlign: 'center' }}>Switch Doors?</DialogTitle>
        <DialogActions>
          <Button onClick={handleClose} variant='outlined'>
            Cancel
          </Button>
          <Button color='success' variant='outlined'>
            Yes
          </Button>
          <Button color='error' onClick={handleNo} variant='outlined'>
            No
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default SwitchDoors
