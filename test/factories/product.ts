import { ProductModel, TagType } from '../../src/models'

export const makeProduct = (): ProductModel.Product => ({
  name: 'valid_name',
  tag: TagType.other,
  value: 1
})

export const makeProductWithId = (): ProductModel.ProductCreated => ({
  id: '000000000000000000000000',
  createdAt: new Date(),
  updatedAt: new Date(),
  ...makeProduct()
})

export const makeProductForOrder = (): ProductModel.ProductForOrder => ({
  ...makeProductWithId(),
  quantity: 1
})
