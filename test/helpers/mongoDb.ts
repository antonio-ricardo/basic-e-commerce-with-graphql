import mongoose, { Mongoose } from 'mongoose'
import { MongoMemoryServer } from 'mongodb-memory-server'

export const createMongoConnection = async () => {
  jest.setTimeout(20000)
  const mongod = await MongoMemoryServer.create()

  const uri = mongod.getUri()

  const connection = await mongoose.connect(uri)

  return { connection, mongod }
}

export const closeDatabase = async (
  mongoConnection: Mongoose,
  mongod: MongoMemoryServer
) => {
  await mongoConnection.connection.dropDatabase()
  await mongoConnection.connection.close()
  await mongod.stop()
}

export const clearDatabase = async (mongoConnection: Mongoose) => {
  const collections = mongoConnection.connection.collections
  for (const key in collections) {
    const collection = collections[key]
    await collection.deleteMany({})
  }
}
