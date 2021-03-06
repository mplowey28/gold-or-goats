import { useEffect, useState } from 'react'
import {
  Alert,
  Button,
  DialogActions,
  DialogTitle,
  DialogContent,
  Stack,
  CircularProgress,
  Typography,
} from '@mui/material'
import { SyntheticEvent } from 'react'
import { useSimParams } from '../context/SimContext'
import Chart from './Chart'
interface PResultsView {
  handleCancel: (
    event: SyntheticEvent<unknown>,
    reason?: string | undefined
  ) => void
}

const ResultsViewer = ({ handleCancel }: PResultsView) => {
  const [result, setResult] = useState<number | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState()
  const simParams = useSimParams()

  const loses =
    simParams?.state.rounds && result && simParams?.state.rounds - result

  const winPer =
    simParams?.state.rounds &&
    result &&
    Math.floor((result / simParams?.state.rounds) * 100)

  const postData = async (url = '', data = {}) => {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    return response.json()
  }

  useEffect(() => {
    setLoading(true)
    postData('https://gold-or-goats.herokuapp.com/', simParams?.state)
      .then((data) => setResult(data))
      .catch(setError)
      .finally(() => setLoading(false))
  }, [simParams])

  return (
    <>
      <DialogTitle>Results</DialogTitle>
      <DialogContent>
        <Stack alignItems='center' justifyContent='center'>
          {!loading ? (
            <Stack height='auto' width='90%' justifyContent='space-between'>
              {result && simParams?.state.rounds ? (
                <Stack>
                  <Chart
                    result={result && result}
                    rounds={simParams?.state.rounds}
                  />
                  <Stack
                    direction='row'
                    justifyContent='center'
                    pt={2}
                    textAlign='center'
                    spacing={2}
                  >
                    <Typography>Wins: {result}</Typography>
                    <Typography>Loses: {loses}</Typography>
                    <Typography>Win%: {winPer}%</Typography>
                  </Stack>
                </Stack>
              ) : (
                <Alert severity='error'>Something went wrong!</Alert>
              )}
            </Stack>
          ) : (
            <Stack>
              <CircularProgress />
            </Stack>
          )}
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCancel} variant='outlined'>
          Reset
        </Button>
      </DialogActions>
    </>
  )
}

export default ResultsViewer
