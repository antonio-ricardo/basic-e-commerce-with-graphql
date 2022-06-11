import { ProductModel } from '../../../models'

export const makeTotal = (products: ProductModel.ProductForOrder[]) => {
  let total = 0

  for (const product of products) {
    total += product.quantity * (product.value * 100)
  }

  return (total as number) / 100
}
