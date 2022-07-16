import 'reflect-metadata'
import 'dotenv/config'
import { ApolloServer } from 'apollo-server'
import mongoose from 'mongoose'
import { Container } from 'inversify'
import { MakeSchema } from './makers/makeSchema'
import { makeAll } from './makers/makeAll'
import { GraphqlErrorHandler } from '../helpers/errorHandler'

export const StartServer = async () => {
  const container = makeAll(new Container())

  mongoose.connect('mongodb://root:example@mongodb:27017/')

  const schema = await MakeSchema(container)

  const server = new ApolloServer({
    schema,
    formatError: (error) => GraphqlErrorHandler(error)
  })
  server
    .listen(process.env.PORT)
    .then(({ url }) => console.log(`Server is running in ${url}`))
}
