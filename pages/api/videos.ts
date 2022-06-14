import nc from 'next-connect'
import upload from 'utils/upload'
import { ObjectId } from 'mongodb'

import type { NextApiRequest, NextApiResponse } from 'next'
import connectToDatabase from 'utils/mongodb'
import jwt from 'next-auth/jwt'

const secret = process.env.JWT_SECRET

export const config = {
  api: {
    bodyParser: false
  }
}

export default nc<NextApiRequest & { [key: string]: any }, NextApiResponse>({

  onError: (err, req, res, next) => {
    console.error(err);
    res.status(500).end('Something broke!');
  },
  onNoMatch: (req, res) => {
    res.status(404).end('Page is not found');
  },
  }).use(upload.single('file'))

  .post(async (req, res) => {

    // const token = await jwt.getToken({ req, secret })

    // if (token) {
      const { title, authorId, authorName, authorAvatar, videoUrl } = req.body
      const { db } = await connectToDatabase()
      const collection = db.collection('videos')
  
      await collection.inserOne({ 
        title, authorName, authorId: new ObjectId(authorId), authorAvatar, views: 0, 
        thumb: req.file.location, videoUrl, updateAt: new Date()
      })
  
      return res.status(200).json({ status: true })
    // }

    // return res.status(401).end()

  })
