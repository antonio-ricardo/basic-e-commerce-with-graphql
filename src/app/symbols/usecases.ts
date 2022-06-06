export const usecasesSymbols = {
  product: {
    getProduct: Symbol('GetProductUsecase'),
    createProduct: Symbol('CreateProductUsecase'),
    updateProduct: Symbol('UpdateProductUsecase'),
    deleteProduct: Symbol('DeleteProductUsecase')
  },
  order: {
    createOrder: Symbol('CreateOrderUsecase')
  }
}
