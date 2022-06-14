import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import VideoInterface from 'interfaces/Video'
import Image from 'next/image'

import { Theme } from '@mui/material'
import { makeStyles, createStyles } from '@mui/styles'
import { Box, Avatar, Typography } from '@mui/material'
import { useRouter } from 'next/router'

dayjs.extend(relativeTime)

const useStyles = makeStyles((theme: Theme) => createStyles({
  caption: {
    fontWeight: 500,
    display: '-webkit-box',
    overflow: 'hidden',
    '-webkit-line-clamp': 2, // Duas linhas, caso contrário coloca "..."
    '-webkit-box-orient': 'vertical',
  },
  img: {
    width: '100%',
    cursor: 'pointer',
  }
}))

export default function TopBar ({ item }: {item: VideoInterface}) {

  const classes = useStyles()
  const router  = useRouter()

  return (
    <Box>
      <Image width={500} height={300} src={item.thumb} alt={item.title} 
        className={classes.img} 
        onClick={() => router.push({ pathname: '/video/[id]', query: { id: item._id } })}
        layout="intrinsic"
      />
      <Box display="flex" mt="1">
        <Box mr={2}>
          <Avatar alt={item.authorName} src={item.authorAvatar}>LL</Avatar>
        </Box>

        <Box>
          <Typography className={classes.caption} variant="body1" color="textPrimary" gutterBottom>
            {item.title}
          </Typography>

          <Typography display="block" variant="body2" color="textSecondary">
            {item.authorName}
          </Typography>

          <Typography variant="body2" color="textSecondary">
            {`${item.views} + ${dayjs(item.updatedAt).fromNow()}`}
          </Typography>
        </Box>

      </Box>
    </Box>
  )
}