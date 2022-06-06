import { inject, injectable } from 'inversify'
import { Arg, Mutation, Resolver } from 'type-graphql'
import { usecasesSymbols } from '../../../app/symbols/usecases'
import { OrderContracts } from '../../../models'
import { OrderWithId } from '../../models'
import { ProductForOrderInput } from '../../models/orders/contracts'

@injectable()
@Resolver()
export class CreateOrderResolver {
  constructor (
    @inject(usecasesSymbols.order.createOrder)
    private readonly createOrderUsecase: OrderContracts.CreateOrder
  ) {}

  @Mutation(() => OrderWithId)
  async CreateOrder (
    @Arg('buyer') buyer: string,
    @Arg('products', (type) => [ProductForOrderInput])
      products: ProductForOrderInput[]
  ) {
    return this.createOrderUsecase.execute({ buyer, products })
  }
}
