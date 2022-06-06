import { inject, injectable } from 'inversify'
import { Arg, Mutation, Resolver } from 'type-graphql'
import { usecasesSymbols } from '../../../app/symbols/usecases'
import { ProductContracts } from '../../../models'
import { InputUpdateProduct, ProductCreated } from '../../models'

@injectable()
@Resolver()
export class UpdateProductResolver {
  constructor (
    @inject(usecasesSymbols.product.updateProduct)
    private readonly updateProductUsecase: ProductContracts.UpdateProduct
  ) {}

  @Mutation(() => ProductCreated)
  async UpdateProduct (@Arg('input') input: InputUpdateProduct) {
    return await this.updateProductUsecase.execute(input)
  }
}
