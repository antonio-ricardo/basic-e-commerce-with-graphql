import { inject, injectable } from 'inversify'
import { Arg, Mutation, Resolver } from 'type-graphql'
import { usecasesSymbols } from '../../../app/symbols/usecases'
import { OrderContracts } from '../../../models'
import { OrderWithId } from '../../models'

@injectable()
@Resolver()
export class GetOrderResolver {
  constructor (
    @inject(usecasesSymbols.order.getOrder)
    private readonly getOrderUsecase: OrderContracts.GetOrder
  ) {}

  @Mutation(() => OrderWithId)
  async GetOrder (@Arg('orderId') id: string) {
    return this.getOrderUsecase.execute(id)
  }
}
