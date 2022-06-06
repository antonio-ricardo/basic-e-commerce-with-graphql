import { MongoMemoryServer } from 'mongodb-memory-server'
import { validateProductTag } from './../../../../src/helpers/validateProductTag'
import { createMongoConnection, closeDatabase } from '../../../helpers/mongoDb'
import { CreateProductUseCase } from './../../../../src/usecases/product/create'
import { makeProduct } from '../../../factories/product'
import productDb from './../../../../src/mongoose/products'
import { ClientBadRequest } from '../../../../src/errors'
import { TagType } from '../../../../src/models'
import { Mongoose } from 'mongoose'

const sut = new CreateProductUseCase()

jest.mock('../../../../src/helpers/validateProductTag', () => ({
  validateProductTag: jest.fn(() => 'OTHER')
}))

describe('Create product usecase tests', () => {
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

  it('Should create product with sent infos', async () => {
    const order = await sut.execute(makeProduct())

    return expect(order).toBeDefined()
  })

  it('Should call validateProductTag with sent tag', async () => {
    await sut.execute({ ...makeProduct(), tag: TagType.food })

    return expect(validateProductTag).toBeCalledWith(TagType.food)
  })

  it('Should throw if already exists a product with sent name', async () => {
    await productDb.create({
      ...makeProduct(),
      createdAt: new Date(),
      updatedAt: new Date()
    })

    const promise = sut.execute(makeProduct())

    return expect(promise).rejects.toThrow(
      new ClientBadRequest('Already exists a product with sent name')
    )
  })
})
