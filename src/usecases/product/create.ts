import { injectable } from 'inversify'
import { ClientBadRequest } from '../../errors'
import { validateProductTag } from '../../helpers/validateProductTag'
import { ProductContracts, ProductModel } from '../../models'
import ProductDb from '../../mongoose/products'

@injectable()
export class CreateProductUseCase implements ProductContracts.CreateProduct {
  async execute (
    infos: ProductModel.Product
  ): Promise<ProductModel.ProductWithId> {
    validateProductTag(infos.tag)

    const productAlreadyExists: ProductModel.ProductWithId[] =
      await ProductDb.find({ name: infos.name })

    if (productAlreadyExists && productAlreadyExists.length > 0) {
      throw new ClientBadRequest('Already exists a product with sent name')
    }

    const product: Promise<ProductModel.ProductWithId> = await ProductDb.create(
      { ...infos, createdAt: new Date(), updatedAt: new Date() }
    )

    return product
  }
}
