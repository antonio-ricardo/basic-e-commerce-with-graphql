import { injectable } from "inversify";
import { ProductContracts, ProductModel } from "../../models";
import ProductDb from "../../mongoose/products";

@injectable()
export class UpdateProductUsecase implements ProductContracts.UpdateProduct {
  async execute(
    input: ProductContracts.Inputs.UpdateProduct
  ): Promise<ProductModel.ProductWithId> {
    const updatedProduct: ProductModel.ProductWithId | null =
      await ProductDb.findOneAndUpdate(
        { _id: input.id },
        { ...input },
        { new: true }
      );

    if (!updatedProduct) {
      throw new Error("Not find any products with sent id");
    }

    return updatedProduct;
  }
}
