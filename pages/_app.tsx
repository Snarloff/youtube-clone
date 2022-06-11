import Head from 'next/head'
import CssBaseline from '@mui/material/CssBaseline'
import theme from 'settings/theme'
import { AppProps } from 'next/app'
import { ThemeProvider } from '@mui/material/styles'
import { SessionProvider  } from 'next-auth/react'

interface MyAppProps extends AppProps {
}

export default function MyApp(props: MyAppProps) {

  const { Component, pageProps } = props
  
  return (
    <SessionProvider session={pageProps.session} refetchInterval={5 * 60}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </SessionProvider>
  )
}