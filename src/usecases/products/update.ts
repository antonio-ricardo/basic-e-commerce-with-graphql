import { ProductContracts, ProductModel } from "../../models";
import ProductDb from "../../mongoose/products"


export const updateProductUsecase = async (input: ProductContracts.Inputs.UpdateProduct) => {
    const updatedProduct: ProductModel.ProductWithId | null = await ProductDb.findOneAndUpdate({_id: input.id}, {...input}, {new: true})

    if (!updatedProduct) {
        throw new Error ("Not find any products with sent id")
    }

    return updatedProduct
}