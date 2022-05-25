import { inject, injectable } from 'inversify'
import { Arg, Query, Resolver } from 'type-graphql'
import { usecasesSymbols } from '../../../app/symbols/usecases'
import { ProductContracts } from '../../../models'
import { ProductWithId } from '../../models/products/model'

@injectable()
@Resolver()
export class GetProductResolver {
  constructor (
    @inject(usecasesSymbols.getProduct)
    private readonly getProductUsecase: ProductContracts.GetProduct
  ) {}

  @Query(() => ProductWithId)
  async GetProduct (@Arg('id') id: string) {
    return await this.getProductUsecase.execute(id)
  }
}
