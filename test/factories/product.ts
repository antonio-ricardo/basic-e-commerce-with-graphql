import { ProductModel, TagType } from '../../src/models'

export const makeProduct = (): ProductModel.Product => ({
  name: 'valid_name',
  tag: TagType.other,
  value: 0
})

export const makeProductWithId = (): ProductModel.ProductCreated => ({
  id: 'valid_id',
  createdAt: new Date(),
  updatedAt: new Date(),
  ...makeProduct()
})
