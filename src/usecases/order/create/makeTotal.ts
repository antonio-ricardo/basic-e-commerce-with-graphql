import { ProductModel } from '../../../models'

export const makeTotal = (products: ProductModel.ProductForOrder[]) => {
  let total

  for (const product of products) {
    total = product.quantity * (product.value * 100)
  }

  return (total as number) / 100
}
