import { GetProductUseCase } from './../../../../src/usecases'
import { makeProductWithId } from './../../../factories/product'
import { MongoMemoryServer } from 'mongodb-memory-server'
import { Mongoose } from 'mongoose'
import { closeDatabase, createMongoConnection } from '../../../helpers/mongoDb'
import productDb from './../../../../src/mongoose/products'
import { ProductModel } from '../../../../src/models'
import { NotFoundError } from '../../../../src/errors'

const sut = new GetProductUseCase()

describe('Get product usecase', () => {
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

  it('Should throw if dont find any product with sent id', () => {
    const promise = sut.execute('000000000000000000000000')

    return expect(promise).rejects.toThrow(
      new NotFoundError('Not found any product with sent id')
    )
  })

  it('Should return a product', async () => {
    const createdProduct: ProductModel.ProductCreated = await productDb.create(
      makeProductWithId()
    )

    const order = await sut.execute(createdProduct.id)

    expect(order.id).toEqual(createdProduct.id)
  })
})
