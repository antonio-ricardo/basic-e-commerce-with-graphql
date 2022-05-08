import { ProductModel } from "../../models";
import ProductDb from "../../mongoose/products"

export const createProductUseCase = async (infos: ProductModel.Product): Promise<ProductModel.ProductWithId> => {
    const product : Promise<ProductModel.ProductWithId> = await ProductDb.create(infos)

    return product
}