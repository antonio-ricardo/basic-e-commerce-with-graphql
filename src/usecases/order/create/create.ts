import { injectable } from 'inversify'
import { OrderContracts, OrderModel, Status } from '../../../models'
import OrderDb from '../../../mongoose/orders'
import { makeTotal } from './makeTotal'

@injectable()
export class CreateOrderUseCase implements OrderContracts.CreateOrder {
  async execute (
    input: OrderContracts.Inputs.CreateOrder
  ): Promise<OrderModel.OrderWithId> {
    const total = makeTotal(input.products)

    const order: Promise<OrderModel.OrderWithId> = await OrderDb.create({
      ...input,
      total,
      status: Status.created,
      createdAt: new Date(),
      updatedAt: new Date()
    })

    return order
  }
}
