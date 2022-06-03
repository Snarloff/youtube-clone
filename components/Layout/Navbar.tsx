import { Theme } from '@mui/material'
import { useRouter } from 'next/router'
import { makeStyles, createStyles } from '@mui/styles'

import { Hidden, Drawer, Box, List, ListItem, ListItemIcon, ListItemText, 
  ListSubheader, Avatar, Divider, Typography, Button } from '@mui/material'

import HomeIcon from '@mui/icons-material/Home'
import SubscriptionsIcon from '@mui/icons-material/Subscriptions'
import WhatshotIcon from '@mui/icons-material/Whatshot'
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary'
import HistoryIcon from '@mui/icons-material/History'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'

import MenuInterface from 'interfaces/Menu'

const useStyles = makeStyles((theme: Theme) => createStyles({
  mobileDrawer: { width: 240 },
  desktopDrawer: { width: 240, top: 56, height: 'calc(100% - 64px)', borderRight: 'none' },
  avatar: { cursor: 'pointer', width: 24, height: 24 },
  listItem: { paddingTop: 6, paddingBottom: 6, paddingLeft: theme.spacing(3) },
  listItemText: { fontSize: 14}
}))

const primaryMenu: Array<MenuInterface> = [
  { id: 1, label: 'Início', path: '/', icon: HomeIcon },
  { id: 2, label: 'Em alta', path: '/trendding', icon: WhatshotIcon },
  { id: 3, label: 'Inscrições', path: '/subscriptions', icon: SubscriptionsIcon }
]

const secondaryMenu: Array<MenuInterface> = [
  { id: 1, label: 'Biblioteca', icon: VideoLibraryIcon },
  { id: 2, label: 'Histórico', icon: HistoryIcon },
]

export default function TopBar () {

  const classes = useStyles()
  const router = useRouter()

  const isSelected = (item: MenuInterface) => {
    return router.pathname === item.path
  }

  const content = (
    <Box height="100" display="flex" flexDirection="column">
      <List>
        {primaryMenu.map((item) => {
          const Icon = item.icon
          return (
            <ListItem key={item.id} button classes={{ root: classes.listItem }} selected={isSelected(item)}>
              <ListItemIcon>
                <Icon style={{ color: isSelected(item) && '#f44336' }}></Icon>
              </ListItemIcon>
              <ListItemText classes={{ primary: classes.listItemText }} primary={item.label} />
            </ListItem>
          )
        })}
      </List>
      
      <Divider />

      <List>
        {secondaryMenu.map((item) => {
          const Icon = item.icon
          return (
            <ListItem key={item.id} button classes={{ root: classes.listItem }} selected={isSelected(item)}>
              <ListItemIcon>
                <Icon style={{ color: isSelected(item) && '#f44336' }}></Icon>
              </ListItemIcon>
              <ListItemText classes={{ primary: classes.listItemText }} primary={item.label} />
            </ListItem>
          )
        })}
      </List>

      <Divider />

      <Box mx={4} my={2}>
        <Typography variant="body2">
          Faça login para curtir vídeos, comentar e se inscrever.
        </Typography>
        <Box mt={2}>
          <Button variant="outlined" color="secondary" startIcon={<AccountCircleIcon />}>
            Fazer login
          </Button>
        </Box>
      </Box>

    </Box>
  )

  return (
    <Hidden>
      <Drawer anchor="left" classes={{ paper: classes.desktopDrawer }} variant="persistent" open>
        {content}
      </Drawer>
    </Hidden>
  )
}
