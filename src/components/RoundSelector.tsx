import { useState } from 'react'
import { useSimParams } from '../context/SimContext'
import {
  Box,
  Button,
  DialogActions,
  DialogTitle,
  DialogContent,
  FormControl,
  InputLabel,
  OutlinedInput,
  Select,
  SelectChangeEvent,
} from '@mui/material'

const RoundSelector = ({
  handleCancel,
  toggleDialogViewer,
}: ItoggleDialogViewer) => {
  const simParams = useSimParams()
  const [error, setError] = useState(false)
  const possibleRounds: number[] = Array.from({ length: 100 }, (_, i) => i + 1)

  return (
    <>
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
              error={error}
              native
              value={simParams?.state.rounds}
              onChange={(event: SelectChangeEvent<number>) =>
                simParams?.dispatch({
                  type: 'setSimParams',
                  payload: {
                    rounds: Number(event.target.value),
                    switch: false,
                  },
                })
              }
              input={<OutlinedInput label='Rounds' id='rounds' />}
            >
              <option value={0}>0</option>
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
        <Button onClick={handleCancel} variant='outlined'>
          Cancel
        </Button>
        <Button
          onClick={() => {
            if (!simParams?.state.rounds) {
              setError(true)
              return
            }
            setError(false)
            toggleDialogViewer('roundSelector', false),
              toggleDialogViewer('switchSelector', true)
          }}
          variant='outlined'
        >
          Ok
        </Button>
      </DialogActions>
    </>
  )
}

export default RoundSelector
