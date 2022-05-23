import { validateProductTag } from "./../../helpers/validateProductTag";
import { NotFoundError } from "./../../errors/notFound";
import { injectable } from "inversify";
import { ProductContracts, ProductModel } from "../../models";
import ProductDb from "../../mongoose/products";

@injectable()
export class UpdateProductUsecase implements ProductContracts.UpdateProduct {
  async execute(
    input: ProductContracts.Inputs.UpdateProduct
  ): Promise<ProductModel.ProductWithId> {
    if (input.tag) {
      validateProductTag(input.tag);
    }

    const updatedProduct: ProductModel.ProductWithId | null =
      await ProductDb.findOneAndUpdate(
        { _id: input.id },
        { ...input },
        { new: true }
      );

    if (!updatedProduct) {
      throw new NotFoundError("Not found any products with sent id");
    }

    return updatedProduct;
  }
}
