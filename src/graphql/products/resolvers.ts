import { validateProductTag } from "../../helpers/validateProductTag";
import { ProductModel } from "../../models";
import { createProductUseCase } from "../../usecases/products/create";

export const resolvers = {
  Mutation: {
    createProduct: async (_: any, args: ProductModel.Product) => {
      const isValidTag = validateProductTag(args.tag)

      if (!isValidTag) {
        throw new Error ('Invalid tag sent')
      }

      return await createProductUseCase(args)
    },
  },
};
