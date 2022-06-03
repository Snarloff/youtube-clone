import { Theme } from '@mui/material'
import { makeStyles, createStyles } from '@mui/styles'
import Head from 'next/head'
import TopBar from './TopBar'
import Navbar from './Navbar'

interface LayoutProps {
  children: React.ReactNode,
  title: string
}

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: '100vh',
    overflow: 'hidden',
    width: '100vw'
  },
  wrapper: { /* Controla o conteúdo */
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden',
    paddingTop: 64,
    [theme.breakpoints.up('lg')]: { /* O tamanho do display for maior que lg (1280) ele da um paddingLeft de 256 */
      paddingLeft: 256
    }
  },
  contentContainer: { /* Ocupar o espaço todo */
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden'
  },
  content: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'auto',
  }
}))

export default function Layout({ children, title }: LayoutProps) {

  const classes = useStyles()

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <div className={classes.root}>

        <TopBar />
        <Navbar />

        <div className={classes.wrapper}>
          <div className={classes.contentContainer}>
            <div className={classes.content}>
              {children}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}