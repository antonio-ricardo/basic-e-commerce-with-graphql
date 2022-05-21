import { Container } from "inversify";
import { ProductContracts } from "../models";
import { CreateProductUseCase } from "../usecases";
import { usecasesSymbols } from "./symbols";

export const MakeUsecase = (container: Container) => {
  container
    .bind<ProductContracts.CreateProduct>(usecasesSymbols.createProduct)
    .to(CreateProductUseCase);

};
