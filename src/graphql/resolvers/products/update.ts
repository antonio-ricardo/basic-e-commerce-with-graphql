import { inject, injectable } from "inversify";
import { Args, Mutation, Resolver } from "type-graphql";
import { usecasesSymbols } from "../../../app/symbols/usecases";
import { ProductContracts } from "../../../models";
import { InputUpdateProduct } from "../../models/products/contracts";
import { ProductWithId } from "../../models/products/model";

@injectable()
@Resolver()
export class UpdateProductResolver {
  constructor(
    @inject(usecasesSymbols.updateProduct)
    private readonly updateProductUsecase: ProductContracts.UpdateProduct
  ) {}

  @Mutation(() => ProductWithId)
  async UpdateProduct(@Args() input: InputUpdateProduct) {
    return await this.updateProductUsecase.execute(input);
  }
}
