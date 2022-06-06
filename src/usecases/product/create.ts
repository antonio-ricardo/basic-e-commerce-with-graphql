import { injectable } from 'inversify'
import { ClientBadRequest } from '../../errors'
import { validateProductTag } from '../../helpers/validateProductTag'
import { ProductContracts, ProductModel } from '../../models'
import ProductDb from '../../mongoose/products'

@injectable()
export class CreateProductUseCase implements ProductContracts.CreateProduct {
  async execute (
    input: ProductModel.Product
  ): Promise<ProductModel.ProductCreated> {
    validateProductTag(input.tag)

    const productAlreadyExists: ProductModel.ProductCreated[] =
      await ProductDb.find({ name: input.name })

    if (productAlreadyExists && productAlreadyExists.length > 0) {
      throw new ClientBadRequest('Already exists a product with sent name')
    }

    const product: Promise<ProductModel.ProductCreated> =
      await ProductDb.create({
        ...input,
        value: Number(input.value.toFixed(2)),
        createdAt: new Date(),
        updatedAt: new Date()
      })

    return product
  }
}
