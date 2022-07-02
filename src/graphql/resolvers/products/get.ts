import { inject, injectable } from 'inversify'
import { Arg, Query, Resolver } from 'type-graphql'
import { usecasesSymbols } from '../../../app/symbols/usecases'
import { ProductContracts } from '../../../models'
import { ProductCreated } from '../../models'

@injectable()
@Resolver()
export class GetProductResolver {
  constructor (
    @inject(usecasesSymbols.product.getProduct)
    private readonly getProductUsecase: ProductContracts.GetProduct
  ) {}

  @Query(() => ProductCreated)
  async GetProduct (@Arg('productId') id: string) {
    return await this.getProductUsecase.execute(id)
  }
}
