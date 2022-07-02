import { OrderContracts } from '../../models'
import OrderDb from '../../mongoose/orders'

export class DeleteOrderUsecase implements OrderContracts.DeleteOrder {
  async execute (id: string): Promise<OrderContracts.Outputs.DeleteOrder> {
    const data = await OrderDb.deleteOne({ _id: id })

    return { hasDeleted: data.deletedCount > 0 }
  }
}
