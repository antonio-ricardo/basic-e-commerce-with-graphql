import { ProductContracts,  } from "../../../models";
import { updateProductUsecase, deleteProductUsecase } from "../../../usecases";

export const resolvers = {
  Mutation: {
    updateProduct: async (_:any, args: ProductContracts.Inputs.UpdateProduct) => {
      return await updateProductUsecase(args)
    },
    deleteProduct: async (_:any, args: ProductContracts.Inputs.DeleteProduct) => {
      return await deleteProductUsecase(args)
    }
  },
};
