import nc from 'next-connect'
import upload from 'utils/upload'

import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  title: string;
  authorName: string;
  authorAvatar: string;
  videoUrl: string;
}

export default nc<NextApiRequest, NextApiResponse<Data>>({

  onError: (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).end('Something broke!');
  },
  onNoMatch: (req, res) => {
    res.status(404).end('Page is not found');
  },
  }).use(upload.single('file'))

  .post((req, res) => {
    const { title, authorName, authorAvatar, videoUrl } = req.body
  })
