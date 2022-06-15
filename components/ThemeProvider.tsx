import { ThemeProvider } from '@mui/material'
import { createMyTheme } from 'theme'
import useSettings from 'hooks/useSettings'

type Provider = {
  children?: React.ReactNode
}

const CustomThemeProvider = ({ children }: Provider) => {

  const { settings } = useSettings()
  const theme = createMyTheme({ theme: settings.theme})

  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  )
}

export default CustomThemeProvider