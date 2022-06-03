import { createTheme } from '@mui/material/styles'
import { common, blueGrey } from '@mui/material/colors'

const theme = createTheme({
  palette: {
    background: {
      default: common.white,
      paper: '#f4f6f8',
    },
    primary: {
      main: '#f44336'
    },
    secondary: {
      main: '#3EA6FF'
    },
    text: {
      primary: blueGrey[900],
      secondary: blueGrey[600]
    }
  },
})

export default theme