import { ProductContracts, ProductModel } from "../../models";
import { createProductUseCase, updateProductUsecase, deleteProductUsecase } from "../../usecases";

export const resolvers = {
  Mutation: {
    createProduct: async (_: any, args: ProductModel.Product) => {
      return await createProductUseCase(args)
    },
    updateProduct: async (_:any, args: ProductContracts.Inputs.UpdateProduct) => {
      return await updateProductUsecase(args)
    },
    deleteProduct: async (_:any, args: ProductContracts.Inputs.DeleteProduct) => {
      return await deleteProductUsecase(args)
    }
  },
};
