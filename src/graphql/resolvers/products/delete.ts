import { inject, injectable } from 'inversify'
import { Arg, Mutation, Resolver } from 'type-graphql'
import { usecasesSymbols } from '../../../app/symbols/usecases'
import { ProductContracts } from '../../../models'
import { OutputDeleteProduct } from '../../models/products/contracts'

@injectable()
@Resolver()
export class DeleteProductResolver {
  constructor (
    @inject(usecasesSymbols.deleteProduct)
    private readonly deleteProductUsecase: ProductContracts.DeleteProduct
  ) {}

  @Mutation(() => OutputDeleteProduct)
  async DeleteProduct (@Arg('id') id: string) {
    return await this.deleteProductUsecase.execute({ id })
  }
}
