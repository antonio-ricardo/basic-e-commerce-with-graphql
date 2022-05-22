import { Container } from "inversify";
import { ProductContracts } from "../../models";
import {
  CreateProductUseCase,
  DeleteProductUsecase,
  UpdateProductUsecase,
} from "../../usecases";
import { usecasesSymbols } from "../symbols/usecases";

export const MakeUsecase = (container: Container) => {
  container
    .bind<ProductContracts.CreateProduct>(usecasesSymbols.createProduct)
    .to(CreateProductUseCase);

  container
    .bind<ProductContracts.UpdateProduct>(usecasesSymbols.updateProduct)
    .to(UpdateProductUsecase);

  container
    .bind<ProductContracts.DeleteProduct>(usecasesSymbols.deleteProduct)
    .to(DeleteProductUsecase);
};
