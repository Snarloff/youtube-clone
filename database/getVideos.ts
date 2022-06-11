import connectToDatabase from 'utils/mongodb'

export default async function getVideos() {
  const { db } = await connectToDatabase()
  return await db.collection('videos').find().toArray()
}