import { Alert } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip, Legend)

interface PChart {
  result: number | null
  rounds: number | undefined
}

const Chart = ({ result, rounds }: PChart) => {
  const theme = useTheme()
  const loses = rounds && result && rounds - result
  const data = {
    datasets: [
      {
        label: 'Wins vs loses',
        data: [result, loses],
        backgroundColor: [
          `${theme.palette.success.main}`,
          `${theme.palette.error.main}`,
        ],
        borderColor: [
          `${theme.palette.success.light}`,
          `${theme.palette.error.light}`,
        ],
        borderWidth: 1,
      },
    ],
  }

  return <Pie data={data} />
}

export default Chart
