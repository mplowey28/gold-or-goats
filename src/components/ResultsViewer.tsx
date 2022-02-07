import { useEffect } from 'react'
import {
  Box,
  Button,
  DialogActions,
  DialogTitle,
  DialogContent,
  Stack,
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
  const simParams = useSimParams()
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
    postData('https://gold-or-goats.herokuapp.com/', simParams?.state).then(
      (data) => console.log(data)
    )
  }, [simParams])

  return (
    <>
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
        <Button onClick={handleCancel} variant='outlined'>
          Reset
        </Button>
      </DialogActions>
    </>
  )
}

export default ResultsViewer
