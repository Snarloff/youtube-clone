import { createTheme } from '@mui/material/styles'
import { common, blueGrey } from '@mui/material/colors'
import { colors, Theme } from '@mui/material'
import Themes from 'utils/constants'

const ThemesOptions: Array<object> = [
  {
    name: Themes.LIGHT,
    overrides: {
      MuiInputBase: {
        input: {
          '&::placeholder': {
            opacity: 1,
            color: colors.blueGrey[600],
          },
        },
      },
    },
    palette: {
      type: 'light',
      action: {
        active: colors.blueGrey[600],
      },
      background: {
        default: colors.common.white,
        dark: '#f4f6f8',
        paper: colors.common.white,
      },
      primary: {
        main: '#f44336',
      },
      secondary: {
        main: '#3EA6FF',
      },
      text: {
        primary: colors.blueGrey[900],
        secondary: colors.blueGrey[600],
      },
    },
  },
  {
    name: Themes.DARK,
    palette: {
      type: 'dark',
      action: {
        active: 'rgba(255, 255, 255, 0.54)',
        hover: 'rgba(255, 255, 255, 0.04)',
        selected: 'rgba(255, 255, 255, 0.08)',
        disabled: 'rgba(255, 255, 255, 0.26)',
        disabledBackground: 'rgba(255, 255, 255, 0.12)',
        focus: 'rgba(255, 255, 255, 0.12)',
      },
      background: {
        default: '#111111',
        dark: '#111111',
        paper: '#111111',
      },
      primary: {
        main: '#8a85ff',
      },
      secondary: {
        main: '#8a85ff',
      },
      text: {
        primary: '#e6e5e8',
        secondary: '#adb0bb',
      },
    },
  },
]

const theme: Theme = createTheme({
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

interface ConfigInterface {
  name: string;
  theme: string;
}

export const createMyTheme = (config = { theme: '' }) => {

  let themeOptions = ThemesOptions.find((theme: any) => theme.name === config.theme);

  if (!themeOptions) {
    console.warn(new Error(`The theme ${config.theme} is not valid!`));
    [themeOptions] = ThemesOptions;
  }

  const theme: Theme = createTheme(themeOptions)
  return theme

}

export default theme