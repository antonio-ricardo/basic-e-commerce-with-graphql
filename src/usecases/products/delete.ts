import { ProductContracts } from "../../models";
import ProductDb from "../../mongoose/products";

export const deleteProductUsecase = async (
  input: ProductContracts.Inputs.DeleteProduct
) => {
  const data = await ProductDb.deleteOne({ _id: input.id });

  return { hasDeleted: data.deletedCount > 0 };
};
