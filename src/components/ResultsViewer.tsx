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

  if (error)
    return (
      <DialogContent>
        <Stack justifyContent='center'>
          <Alert severity='error'>Something went wrong!</Alert>
          <Button onClick={handleCancel} variant='outlined'>
            Reset
          </Button>
        </Stack>
      </DialogContent>
    )

  return (
    <>
      <DialogTitle>Results</DialogTitle>
      <DialogContent>
        <Stack justifyContent='center'>
          {!loading ? (
            <Stack>
              <Stack height='300px' width='300px'>
                {result && simParams?.state.rounds && !error ? (
                  <Chart
                    result={result && result}
                    rounds={simParams?.state.rounds}
                  />
                ) : (
                  <Alert severity='error'>Something went wrong!</Alert>
                )}
              </Stack>
              <Stack direction='row' pt={2} justifyContent='center' spacing={2}>
                <Typography>{result ? `Wins: ${result}` : 'N/A'}</Typography>
                <Typography>{loses ? `Loses: ${loses}` : 'N/A'}</Typography>
                <Typography>{winPer ? `Win%: ${winPer}%` : 'N/A'}</Typography>
              </Stack>
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
