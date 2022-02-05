import { useEffect, useState } from 'react'

import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
  Stack,
} from '@mui/material'
import Chart from './Chart'
interface DataProps {
  simParams: ISimParams
  switchOpen: boolean
}

const Results = ({ simParams, switchOpen }: DataProps) => {
  const [resultsOpen, setResultsOpen] = useState<boolean>(false)

  useEffect(() => {
    simParams.rounds > 0 && !switchOpen && setResultsOpen(true)
  }, [simParams, switchOpen])

  return (
    <Dialog
      disableEscapeKeyDown
      open={resultsOpen}
      onClose={() => setResultsOpen(false)}
    >
      <DialogTitle>Results</DialogTitle>
      <DialogContent>
        <Box
          component='div'
          justifyContent='center'
          sx={{ display: 'flex', flexWrap: 'wrap' }}
        >
          <Stack height='400px' width='400px'>
            <Chart />
          </Stack>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setResultsOpen(false)} variant='outlined'>
          Reset
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default Results
