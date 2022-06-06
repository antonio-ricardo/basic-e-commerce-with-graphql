import { inject, injectable } from 'inversify'
import { Args, Mutation, Resolver } from 'type-graphql'
import { usecasesSymbols } from '../../../app/symbols/usecases'
import { ProductContracts } from '../../../models'
import { InputCreateProduct, ProductCreated } from '../../models'

@injectable()
@Resolver()
export class CreateProductResolver {
  constructor (
    @inject(usecasesSymbols.product.createProduct)
    private readonly createProductUsecase: ProductContracts.CreateProduct
  ) {}

  @Mutation(() => ProductCreated)
  async CreateProduct (@Args() input: InputCreateProduct) {
    return await this.createProductUsecase.execute(input)
  }
}
