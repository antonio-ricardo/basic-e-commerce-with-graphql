import { validateProductTag } from './../../helpers/validateProductTag'
import { NotFoundError } from './../../errors/notFound'
import { injectable } from 'inversify'
import { ProductContracts, ProductModel } from '../../models'
import ProductDb from '../../mongoose/products'

@injectable()
export class UpdateProductUsecase implements ProductContracts.UpdateProduct {
  async execute (
    input: ProductContracts.Inputs.UpdateProduct
  ): Promise<ProductModel.ProductCreated> {
    if (input.tag) {
      validateProductTag(input.tag)
    }

    if (input.value) {
      input.value = Number(input.value.toFixed(2))
    }

    const updatedProduct: ProductModel.ProductCreated | null =
      await ProductDb.findOneAndUpdate(
        { _id: input.id },
        { ...input, updatedAt: new Date() },
        { new: true }
      )

    if (!updatedProduct) {
      throw new NotFoundError('Not found any products with sent id')
    }

    return updatedProduct
  }
}
