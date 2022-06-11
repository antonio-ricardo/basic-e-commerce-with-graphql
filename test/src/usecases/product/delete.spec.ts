import { MongoMemoryServer } from 'mongodb-memory-server'
import { Mongoose } from 'mongoose'
import { closeDatabase, createMongoConnection } from '../../../helpers/mongoDb'
import { DeleteProductUsecase } from './../../../../src/usecases/product/delete'
import productDb from './../../../../src/mongoose/products'
import { makeProductWithId } from '../../../factories/product'
import { ProductModel } from '../../../../src/models'

const sut = new DeleteProductUsecase()

describe('Delete product usecase tests', () => {
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

  it('Should return hasDeleted with true if delete an order', async () => {
    const createdOrder: ProductModel.ProductCreated = await productDb.create(
      makeProductWithId()
    )

    const data = await sut.execute({ id: createdOrder.id })

    expect(data).toEqual({ hasDeleted: true })
  })

  it('Should return hasDeleted with false if not delete an order', async () => {
    const data = await sut.execute({ id: '000000000000000000000000' })

    expect(data).toEqual({ hasDeleted: false })
  })
})
