import { ProductModel, TagType } from "../../src/models";

export const makeProduct = (): ProductModel.Product => ({
  name: "valid_name",
  tag: TagType.other,
  value: 0,
});

export const makeProductWithId = (): ProductModel.ProductWithId => ({
  id: "valid_id",
  ...makeProduct(),
});
