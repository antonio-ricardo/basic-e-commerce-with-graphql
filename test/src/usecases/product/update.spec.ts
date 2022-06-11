import { validateProductTag } from './../../../../src/helpers/validateProductTag'
import { MongoMemoryServer } from 'mongodb-memory-server'
import { Mongoose } from 'mongoose'
import { closeDatabase, createMongoConnection } from '../../../helpers/mongoDb'
import { UpdateProductUsecase } from './../../../../src/usecases'
import productDb from './../../../../src/mongoose/products'
import { makeProduct, makeProductWithId } from '../../../factories/product'
import { ProductModel, TagType } from '../../../../src/models'
import { NotFoundError } from '../../../../src/errors'

const sut = new UpdateProductUsecase()

jest.mock('../../../../src/helpers/validateProductTag', () => ({
  validateProductTag: jest.fn(() => 'OTHER')
}))

describe('Update product usecase tests', () => {
  let mongoConnection: Mongoose
  let mongod: MongoMemoryServer

  const product = makeProduct()
  const productWithId = makeProductWithId()

  beforeEach(async () => {
    const connectionInfo = await createMongoConnection()

    mongoConnection = connectionInfo.connection

    mongod = connectionInfo.mongod
  })

  afterEach(async () => {
    await closeDatabase(mongoConnection, mongod)
  })

  it('Shouldent call validateProductTag if dont send tag', async () => {
    const createdOrder: ProductModel.ProductCreated = await productDb.create(
      productWithId
    )

    await sut.execute({ id: createdOrder.id, name: product.name })

    expect(validateProductTag).not.toBeCalled()
  })

  it('Should call validateProductTag if send tag', async () => {
    const createdOrder: ProductModel.ProductCreated = await productDb.create(
      productWithId
    )

    await sut.execute({ id: createdOrder.id, ...product })

    expect(validateProductTag).toBeCalled()
  })

  it('Should to fixed 2 number after the point if send value', async () => {
    const createdOrder: ProductModel.ProductCreated = await productDb.create(
      productWithId
    )

    const updatedOrder = await sut.execute({
      id: createdOrder.id,
      value: 10.555555555555555
    })

    expect(updatedOrder.value).toEqual(10.56)
  })

  it('Should update de product and return the updated product', async () => {
    const createdOrder: ProductModel.ProductCreated = await productDb.create(
      productWithId
    )

    const updatedOrder = await sut.execute({
      id: createdOrder.id,
      value: 10,
      name: 'valid_updated_name',
      tag: TagType.toys
    })

    expect(updatedOrder.value).toEqual(10)
    expect(updatedOrder.name).toEqual('valid_updated_name')
    expect(updatedOrder.tag).toEqual('TOYS')
    expect(updatedOrder.id).toEqual(createdOrder.id)
  })

  it('Should throw notFoundError if dont find a product with sent id', () => {
    const promise = sut.execute({
      id: '000000000000000000000000',
      value: 10,
      name: 'valid_updated_name',
      tag: TagType.toys
    })

    return expect(promise).rejects.toThrow(
      new NotFoundError('Not found any products with sent id')
    )
  })
})
