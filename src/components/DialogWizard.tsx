import { SyntheticEvent, useState } from 'react'
import { Box, Button, Dialog } from '@mui/material'
import RoundSelector from './RoundSelector'
import SwitchDoors from './SwitchDoors'
import ResultsViewer from './ResultsViewer'
import { useSimParams } from '../context/SimContext'

const DialogWizard = () => {
  const simParams = useSimParams()
  const [dialogOpen, setDialogOpen] = useState(false)
  const [roundSelectorOpen, setRoundSelectorOpen] = useState(false)
  const [switchSelectorOpen, setSwitchSelectorOpen] = useState(false)
  const [resultsViewerOpen, setResultsViewerOpen] = useState(false)

  const startSim = () => {
    setDialogOpen(true)
    setRoundSelectorOpen(true)
  }

  const handleCancel = (event: SyntheticEvent<unknown>, reason?: string) => {
    if (reason !== 'backdropClick') {
      simParams?.dispatch({
        type: 'setSimParams',
        payload: { rounds: 0, switch: false },
      })
      setRoundSelectorOpen(false)
      setSwitchSelectorOpen(false)
      setResultsViewerOpen(false)
      setDialogOpen(false)
    }
  }
  const toggleDialogViewer = (view: string, active: boolean) => {
    view === 'roundSelector' && setRoundSelectorOpen(active)
    view === 'switchSelector' && setSwitchSelectorOpen(active)
    view === 'resultsView' && setResultsViewerOpen(active)
  }

  return (
    <Box>
      <Button onClick={startSim} variant='outlined'>
        START A NEW GAME
      </Button>
      <Dialog disableEscapeKeyDown open={dialogOpen} onClose={handleCancel}>
        {roundSelectorOpen && (
          <RoundSelector
            handleCancel={handleCancel}
            toggleDialogViewer={toggleDialogViewer}
          />
        )}
        {switchSelectorOpen && (
          <SwitchDoors
            handleCancel={handleCancel}
            toggleDialogViewer={toggleDialogViewer}
          />
        )}
        {resultsViewerOpen && <ResultsViewer handleCancel={handleCancel} />}
      </Dialog>
    </Box>
  )
}

export default DialogWizard
