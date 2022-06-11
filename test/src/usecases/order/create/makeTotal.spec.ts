import { ProductModel, TagType } from '../../../../../src/models'
import { makeTotal } from './../../../../../src/usecases/order/create/makeTotal'

describe('Make total tests', () => {
  const products: ProductModel.ProductForOrder[] = [
    {
      quantity: 1,
      value: 25.5,
      createdAt: new Date(),
      updatedAt: new Date(),
      id: 'valid_id',
      name: 'valid_name',
      tag: TagType.other
    },
    {
      quantity: 3,
      value: 25.55,
      createdAt: new Date(),
      updatedAt: new Date(),
      id: 'valid_id',
      name: 'valid_name',
      tag: TagType.other
    },
    {
      quantity: 10,
      value: 40,
      createdAt: new Date(),
      updatedAt: new Date(),
      id: 'valid_id',
      name: 'valid_name',
      tag: TagType.other
    },
    {
      quantity: 2,
      value: 12.99,
      createdAt: new Date(),
      updatedAt: new Date(),
      id: 'valid_id',
      name: 'valid_name',
      tag: TagType.other
    }
  ]

  it('Should return a total', () => {
    expect(makeTotal(products)).toEqual(528.13)
  })
})
