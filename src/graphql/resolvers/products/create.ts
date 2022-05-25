import { inject, injectable } from 'inversify'
import { Args, Mutation, Resolver } from 'type-graphql'
import { usecasesSymbols } from '../../../app/symbols/usecases'
import { ProductContracts } from '../../../models'
import { InputCreateProduct } from '../../models/products/contracts'
import { ProductWithId } from '../../models/products/model'

@injectable()
@Resolver()
export class CreateProductResolver {
  constructor (
    @inject(usecasesSymbols.createProduct)
    private readonly createProductUsecase: ProductContracts.CreateProduct
  ) {}

  @Mutation(() => ProductWithId)
  async CreateProduct (@Args() input: InputCreateProduct) {
    return await this.createProductUsecase.execute(input)
  }
}
