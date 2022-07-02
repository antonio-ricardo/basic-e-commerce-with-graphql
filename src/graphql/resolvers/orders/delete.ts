import { inject, injectable } from 'inversify'
import { Arg, Mutation, Resolver } from 'type-graphql'
import { usecasesSymbols } from '../../../app/symbols/usecases'
import { OrderContracts } from '../../../models'
import { DeleteOrderOutput } from '../../models/orders/contracts'

@injectable()
@Resolver()
export class DeleteOrderResolver {
  constructor (
    @inject(usecasesSymbols.order.deleteOrder)
    private readonly deleteOrderUsecase: OrderContracts.DeleteOrder
  ) {}

  @Mutation(() => DeleteOrderOutput)
  async DeleteOrder (@Arg('orderId') id: string) {
    return this.deleteOrderUsecase.execute(id)
  }
}
