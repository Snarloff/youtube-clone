import type { NextPage } from 'next'

import Layout from 'components/Layout'
import { Box, Grid } from '@mui/material'

import VideoInterface from 'interfaces/Video'
import VideoCard from 'components/VideoCard'

const Home: NextPage = ({ data }: {data?: VideoInterface[]}): JSX.Element => (
  <Layout title="Youtube">
    <Box padding={2}>
      <Grid container spacing={4}>
        {data?.map((item: VideoInterface) => (
          <Grid key={item._id} item xl={3} lg={3} md={4} sm={6} xs={12}>
            <VideoCard item={item} />
          </Grid>
        ))}
      </Grid>
    </Box>
  </Layout>
)

export async function getStaticProps() {

  const data = [
    {
      _id: 1,
      title: 'FEED DO USUÁRIO | Criando uma Rede Social com React.js e .NET Core #29',
      authorId: 1,
      authorName: 'Lucas Nhimi',
      authorAvatar: 'avatarUrl',
      views: 10,
      thumb: '/thumbs/next01.png',
      videoUrl: 'url',
      updatedAt: new Date(),
    },
    {
      _id: 2,
      title: 'FEED DO USUÁRIO | Criando uma Rede Social com React.js e .NET Core #29',
      authorId: 1,
      authorName: 'Lucas Nhimi',
      authorAvatar: 'avatarUrl',
      views: 10,
      thumb: '/thumbs/next01.png',
      videoUrl: 'url',
      updatedAt: new Date(),
    },
    {
      _id: 3,
      title: 'FEED DO USUÁRIO | Criando uma Rede Social com React.js e .NET Core #29',
      authorId: 1,
      authorName: 'Lucas Nhimi',
      authorAvatar: 'avatarUrl',
      views: 10,
      thumb: '/thumbs/next01.png',
      videoUrl: 'url',
      updatedAt: new Date(),
    },
    {
      _id: 4,
      title: 'FEED DO USUÁRIO | Criando uma Rede Social com React.js e .NET Core #29',
      authorId: 1,
      authorName: 'Lucas Nhimi',
      authorAvatar: 'avatarUrl',
      views: 10,
      thumb: '/thumbs/next01.png',
      videoUrl: 'url',
      updatedAt: new Date(),
    },
  ];

  return {
    props: {
      data: JSON.parse(JSON.stringify(data))
    },
    revalidate: 15
  }
}

export default Home
