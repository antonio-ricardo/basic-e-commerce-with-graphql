import { Container } from 'inversify'
import { OrderContracts, ProductContracts } from '../../models'
import {
  CreateProductUseCase,
  DeleteProductUsecase,
  GetProductUseCase,
  UpdateProductUsecase,
  CreateOrderUseCase
} from '../../usecases'
import { usecasesSymbols } from '../symbols/usecases'

export const MakeUsecase = (container: Container) => {
  container
    .bind<ProductContracts.CreateProduct>(usecasesSymbols.product.createProduct)
    .to(CreateProductUseCase)

  container
    .bind<ProductContracts.UpdateProduct>(usecasesSymbols.product.updateProduct)
    .to(UpdateProductUsecase)

  container
    .bind<ProductContracts.DeleteProduct>(usecasesSymbols.product.deleteProduct)
    .to(DeleteProductUsecase)

  container
    .bind<ProductContracts.GetProduct>(usecasesSymbols.product.getProduct)
    .to(GetProductUseCase)

  container
    .bind<OrderContracts.CreateOrder>(usecasesSymbols.order.createOrder)
    .to(CreateOrderUseCase)
}
