import { SyntheticEvent, useState } from 'react'
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
  FormControl,
  InputLabel,
  OutlinedInput,
  Select,
  SelectChangeEvent,
} from '@mui/material'
import SwitchDoors from './SwitchDoors'

const RoundSelect = () => {
  const [open, setOpen] = useState<boolean>(false)
  const [rounds, setRounds] = useState<number>(0)

  const handleChange = (event: SelectChangeEvent<number>) => {
    setRounds(Number(event.target.value))
  }

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = (event: SyntheticEvent<unknown>, reason?: string) => {
    if (reason !== 'backdropClick') {
      setOpen(false)
    }
  }

  const possibleRounds: number[] = Array.from(Array(101).keys())
  return (
    <Box>
      <Button onClick={handleClickOpen} variant='outlined'>
        START A NEW GAME
      </Button>
      <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
        <DialogTitle>How many rounds?</DialogTitle>
        <DialogContent>
          <Box
            component='form'
            justifyContent='center'
            sx={{ display: 'flex', flexWrap: 'wrap' }}
          >
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel htmlFor='rounds'>Rounds</InputLabel>
              <Select
                native
                value={rounds}
                onChange={handleChange}
                input={<OutlinedInput label='Rounds' id='rounds' />}
              >
                <option aria-label='None' value='' />
                {possibleRounds.map((n: number) => (
                  <option key={n} value={n}>
                    {n}
                  </option>
                ))}
              </Select>
            </FormControl>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant='outlined'>
            Cancel
          </Button>
          <Button onClick={handleClose} variant='outlined'>
            Ok
          </Button>
        </DialogActions>
      </Dialog>
      <SwitchDoors rounds={rounds} open={open} />
    </Box>
  )
}

export default RoundSelect
