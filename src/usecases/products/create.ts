import { validateProductTag } from "../../helpers/validateProductTag";
import { ProductModel } from "../../models";
import ProductDb from "../../mongoose/products"

export const createProductUseCase = async (infos: ProductModel.Product): Promise<ProductModel.ProductWithId> => {
    const isValidTag = validateProductTag(infos.tag)

    if (!isValidTag) {
      throw new Error ('Invalid tag sent')
    }

    const productAlreadyExists: ProductModel.ProductWithId[] = await ProductDb.find({name: infos.name})

    console.log(productAlreadyExists)

    if (productAlreadyExists && productAlreadyExists.length < 0) {
        throw new Error ('Already exists a product with this name')
    }

    const product : Promise<ProductModel.ProductWithId> = await ProductDb.create(infos)

    return product
}