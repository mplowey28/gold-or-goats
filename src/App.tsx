import { Box, Stack, Typography } from '@mui/material'
import Goat from './assets/images/goat.png'
import Gold from './assets/images/goldBars.png'
//import Results from './components/Results'
import RoundSelect from './components/RoundSelect'

const App = () => (
  <Stack
    bgcolor='background.default'
    height='100vh'
    justifyContent='flex-start'
    p={2}
    textAlign='center'
    width='100%'
  >
    <Typography color='text.primary' variant='h3'>
      Welcome to Gold or Goats
    </Typography>
    <Stack alignItems='center' direction='row' justifyContent='center' my={2}>
      <Box
        component='img'
        sx={{ height: 98, width: 98 }}
        src={Gold}
        alt='gold bars'
      />
      <Typography color='text.primary' m={2} variant='h1'>
        ||
      </Typography>
      <Box
        component='img'
        sx={{ height: 98, width: 98 }}
        src={Goat}
        alt='gold bars'
      />
    </Stack>
    <RoundSelect />
    {/* <Results /> */}
  </Stack>
)

export default App
