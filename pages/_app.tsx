import Head from 'next/head'
import CssBaseline from '@mui/material/CssBaseline'
import NProgress from 'nprogress'
import CustomThemeProvider from 'components/ThemeProvider'
import { AppProps } from 'next/app'
import { SessionProvider  } from 'next-auth/react'
import { Router } from 'next/router'
import { Fragment } from 'react'
import { SettingsProvider } from 'contexts/SettingsContext'

import 'nprogress/nprogress.css'

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
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>

      <SessionProvider session={pageProps.session} refetchInterval={5 * 60}>
        <SettingsProvider>
          <CustomThemeProvider>
            <CssBaseline />
            <Component {...pageProps} />
          </CustomThemeProvider>
        </SettingsProvider>
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