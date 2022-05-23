import { makeProductWithId } from "./../../factories/product";
import { mock } from "jest-mock-extended";
import { ProductContracts } from "../../../src/models";

export const getProductUsecaseStub = mock<ProductContracts.GetProduct>({
  execute: () => Promise.resolve(makeProductWithId()),
});
