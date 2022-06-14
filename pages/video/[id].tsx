import { Button } from '@mui/material'
import Layout from 'components/Layout'
import { useRouter } from 'next/router'

export default function Video() {

  const router = useRouter()

  return (
    <Layout>
      <span>{router.query.id}</span>
      <Button onClick={() => router.back()}>Voltar</Button>
    </Layout>
  )
}