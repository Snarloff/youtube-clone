import { Hidden, Theme } from '@mui/material'
import { makeStyles, createStyles } from '@mui/styles'

import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'
import InputBase from '@mui/material/InputBase'
import IconButton from '@mui/material/IconButton'

import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'
import VideoCallIcon from '@mui/icons-material/VideoCall'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import AppsIcon from '@mui/icons-material/Apps'

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    boxShadow: 'none',
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: theme.palette.background.default,
  },
  toolbar: {
    minHeight: 56,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: {
    cursor: 'pointer',
    height: 18,
    marginLeft: theme.spacing(3),
  },
  search: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    height: 35,
    width: 700
  },
  input: {
    flex: 1
  },
}))

export default function TopBar () {

  const classes = useStyles()

  return (
    <AppBar className={classes.root} color="default">
      <Toolbar className={classes.toolbar}>
        <Box display="flex" alignItems="center">
          <MenuIcon />
          <img src="/youtubeLogo.svg" alt="Youtube logo" className={classes.logo}/>
        </Box>
        <Hidden mdDown> {/*menor que a resolução média */}
          <Box>
            <Paper component="form" className={classes.search}>
              <InputBase className={classes.input} placeholder="Pesquisar" inputProps={{ 'arial-label': 'search google maps' }} />
              <IconButton type="submit" arial-label="search">
                <SearchIcon />
              </IconButton>
            </Paper>
          </Box>
        </Hidden>
        <Box display="flex" alignItems="center">
         <IconButton>
          <VideoCallIcon />
         </IconButton>
         <IconButton>
          <AppsIcon />
         </IconButton>
         <IconButton>
          <MoreVertIcon />
         </IconButton>

          <Button 
            color="secondary" 
            component="a" 
            variant="outlined" 
            startIcon={<AccountCircleIcon />}
            // onClick={() => signIn('google')}
          >
            Fazer login
          </Button>

        </Box>
      </Toolbar>
    </AppBar>
  )
}