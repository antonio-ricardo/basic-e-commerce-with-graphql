import { makeOrder } from './../../../factories/order'
import { mock } from 'jest-mock-extended'
import { OrderContracts } from '../../../../src/models'

export const createOrderUsecaseStub = mock<OrderContracts.CreateOrder>({
  execute: () =>
    Promise.resolve({ ...makeOrder(), id: '000000000000000000000000' })
})
