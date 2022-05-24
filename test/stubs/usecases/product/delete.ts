import { mock } from "jest-mock-extended";
import { ProductContracts } from "../../../../src/models";

export const deleteProductUsecaseStub = mock<ProductContracts.DeleteProduct>({
  execute: () => Promise.resolve({ hasDeleted: true }),
});
