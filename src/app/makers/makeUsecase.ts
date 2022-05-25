import { Container } from 'inversify'
import { ProductContracts } from '../../models'
import {
  CreateProductUseCase,
  DeleteProductUsecase,
  GetProductUseCase,
  UpdateProductUsecase
} from '../../usecases'
import { usecasesSymbols } from '../symbols/usecases'

export const MakeUsecase = (container: Container) => {
  container
    .bind<ProductContracts.CreateProduct>(usecasesSymbols.createProduct)
    .to(CreateProductUseCase)

  container
    .bind<ProductContracts.UpdateProduct>(usecasesSymbols.updateProduct)
    .to(UpdateProductUsecase)

  container
    .bind<ProductContracts.DeleteProduct>(usecasesSymbols.deleteProduct)
    .to(DeleteProductUsecase)

  container
    .bind<ProductContracts.GetProduct>(usecasesSymbols.getProduct)
    .to(GetProductUseCase)
}
