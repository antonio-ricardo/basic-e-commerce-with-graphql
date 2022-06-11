import { makeProductForOrder } from './../../../../factories/product'
import { makeTotal } from '../../../../../src/usecases/order/create/makeTotal'
import { CreateOrderUseCase } from './../../../../../src/usecases'
import { Mongoose } from 'mongoose'
import { MongoMemoryServer } from 'mongodb-memory-server'
import {
  closeDatabase,
  createMongoConnection
} from '../../../../helpers/mongoDb'

jest.mock('../../../../../src/usecases/order/create/makeTotal', () => ({
  makeTotal: jest.fn(() => 1)
}))

const sut = new CreateOrderUseCase()

describe('Create order usecase tests', () => {
  let mongoConnection: Mongoose
  let mongod: MongoMemoryServer

  beforeEach(async () => {
    const connectionInfo = await createMongoConnection()

    mongoConnection = connectionInfo.connection

    mongod = connectionInfo.mongod
  })

  afterEach(async () => {
    await closeDatabase(mongoConnection, mongod)
  })

  const productForOrder = makeProductForOrder()

  it('Should call makeTotal', async () => {
    await sut.execute({
      buyer: '000000000000000000000000',
      products: [productForOrder]
    })

    expect(makeTotal).toHaveBeenCalled()
  })

  it('Should create an order and return it', async () => {
    const order = await sut.execute({
      buyer: '000000000000000000000000',
      products: [productForOrder]
    })

    expect(order).toBeDefined()
  })
})
