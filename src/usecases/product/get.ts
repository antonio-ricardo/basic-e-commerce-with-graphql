import { NotFoundError } from './../../errors/notFound'
import { injectable } from 'inversify'
import { ProductContracts, ProductModel } from '../../models'
import ProductDb from '../../mongoose/products'

@injectable()
export class GetProductUseCase implements ProductContracts.GetProduct {
  async execute (id: string): Promise<ProductModel.ProductCreated> {
    const product: ProductModel.ProductCreated | null =
      await ProductDb.findById(id)

    if (!product) {
      throw new NotFoundError('Not found any product with sent id')
    }

    return product
  }
}
