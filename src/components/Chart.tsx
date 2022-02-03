import { useTheme } from '@mui/material/styles'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip, Legend)

const Chart = () => {
  const theme = useTheme()
  const data = {
    labels: ['Win', 'Lose'],
    datasets: [
      {
        label: 'Wins vs loses',
        data: [75, 25],
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
