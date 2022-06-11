import { makeProductForOrder } from './product'
import { OrderModel, Status } from '../../src/models'

export const makeOrder = (): OrderModel.Order => ({
  buyer: '000000000000000000000000',
  status: Status.created,
  products: [makeProductForOrder()],
  total: 0,
  createdAt: new Date(),
  updatedAt: new Date()
})
