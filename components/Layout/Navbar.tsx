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
import { signIn, useSession } from 'next-auth/react'
import { useState } from 'react'

interface SubscriptionInterface {
  id: number;
  name: string;
}

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

  const { data: session, status } = useSession()

  const isSelected = (item: MenuInterface) => {
    return router.pathname === item.path
  }

  const [subscriptions, setSubscriptions] = useState<SubscriptionInterface[]>([
    { id: 1, name: 'Canal 1' },
    { id: 2, name: 'Canal 2' },
    { id: 3, name: 'Canal 3' },
    { id: 4, name: 'Canal 4' },
    { id: 5, name: 'Canal 5' },
    { id: 6, name: 'Canal 6' },
    { id: 7, name: 'Canal 7' },
    { id: 8, name: 'Canal 8' },
    { id: 9, name: 'Canal 9' },
    { id: 10, name: 'Canal 10' },
  ])

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
      
      <Box>
        {status !== 'authenticated' ? (

          <Box mx={4} my={2}>
            <Typography variant="body2">
              Faça login para curtir vídeos, comentar e se inscrever.
            </Typography>
            <Box mt={2}>
              <Button variant="outlined" color="secondary" startIcon={<AccountCircleIcon />} onClick={() => signIn('google')}>
                Fazer login
              </Button>
            </Box>
          </Box>

          ) : (
            <List subheader={(
              <ListSubheader component="div" id="nested-list-subheader">INSCRIÇÕES</ListSubheader>
            )}>
              {subscriptions.map((item) => (
                <ListItem key={item.id} button classes={{ root: classes.listItem }} selected={isSelected(item)}>
                  <ListItemIcon>
                    <Avatar className={classes.avatar}>S</Avatar>
                  </ListItemIcon>
                  <ListItemText classes={{ primary: classes.listItemText }} primary={item.name} />
                </ListItem>
              ))}
            </List>
          )
          
        }
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
