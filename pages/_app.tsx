import Head from 'next/head'
import CssBaseline from '@mui/material/CssBaseline'
import theme from 'settings/theme'
import { AppProps } from 'next/app'
import { ThemeProvider } from '@mui/material/styles'
import { SessionProvider  } from 'next-auth/react'
import { Router } from 'next/router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { Fragment } from 'react'

interface MyAppProps extends AppProps {
}

NProgress.configure({
  showSpinner: false,
  trickleSpeed: 300
})

Router.events.on('routeChangeStart', () => {
  NProgress.start()
})

Router.events.on('routeChangeComplete', () => {
  NProgress.done()
})

Router.events.on('routeChangeError', () => {
  NProgress.done()
})

export default function MyApp(props: MyAppProps) {

  const { Component, pageProps } = props
  
  return (
    <Fragment>
      <SessionProvider session={pageProps.session} refetchInterval={5 * 60}>
        <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </SessionProvider>

      <style global jsx>
        {`
          #nprogress {
            position: relative;
            z-index: 9999999;
          }
          #nprogress .bar {
            background: #f44336 !important
            height: 3px;
          }
        `}
      </style>
    </Fragment>

  )
}