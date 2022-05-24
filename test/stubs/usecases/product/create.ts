import { mock } from "jest-mock-extended";
import { ProductContracts } from "../../../../src/models";
import { makeProductWithId } from "../../../factories/product";

export const createProductUsecaseStub = mock<ProductContracts.CreateProduct>({
  execute: () => Promise.resolve(makeProductWithId()),
});
