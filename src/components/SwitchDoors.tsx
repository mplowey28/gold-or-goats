import { SyntheticEvent, useEffect, useState } from 'react'
import { Button, Dialog, DialogActions, DialogTitle } from '@mui/material'

type SwitchDoorProps = {
  open: boolean
  rounds: number
}
const SwitchDoors = ({ open, rounds }: SwitchDoorProps) => {
  const [switchOpen, setSwitchOpen] = useState<boolean>(false)

  useEffect(() => {
    rounds > 0 && !open && setSwitchOpen(true)
  }, [open, rounds])

  const handleChange = (e: SyntheticEvent<HTMLButtonElement>) => {
    let data
    if (e.currentTarget.name === 'yes') {
      data = { rounds: rounds, switch: true }
    }
    if (e.currentTarget.name === 'no') {
      data = { rounds: rounds, switch: false }
    }
    setSwitchOpen(false)
    console.log(data)
  }

  return (
    <>
      <Dialog
        disableEscapeKeyDown
        open={switchOpen}
        onClose={() => setSwitchOpen(false)}
      >
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
    </>
  )
}

export default SwitchDoors
