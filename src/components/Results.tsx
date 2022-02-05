import { useEffect, useState } from 'react'
import useAxios from '../hooks/useAxios'
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
  const [data, setData] = useState<any>()
  const { response, loading, error } = useAxios({
    method: 'post',
    url: 'http://localhost:9090',
    headers: { 'content-type': 'application/json' },
    data: JSON.stringify(simParams),
  })

  useEffect(() => {
    simParams.rounds > 0 && !switchOpen && setResultsOpen(true)
  }, [simParams, switchOpen])

  useEffect(() => {
    if (response !== null) {
      setData(response)
    }
  }, [response])

  console.log(data)
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
