import { injectable } from "inversify";
import { ProductContracts } from "../../models";
import ProductDb from "../../mongoose/products";

@injectable()
export class DeleteProductUsecase implements ProductContracts.DeleteProduct {
  async execute(
    input: ProductContracts.Inputs.DeleteProduct
  ): Promise<ProductContracts.Outputs.DeleteProduct> {
    const data = await ProductDb.deleteOne({ _id: input.id });

    return { hasDeleted: data.deletedCount > 0 };
  }
}
