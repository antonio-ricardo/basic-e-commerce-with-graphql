import { TagType } from "./../../../src/models/product";
import { createProductUsecaseStub } from "../../stubs";
import { CreateProductResolver } from "./../../../src/graphql/resolvers";

const makeSut = () => {
  const sut = new CreateProductResolver(createProductUsecaseStub);

  return {
    sut,
    createProductUsecaseStub,
  };
};

describe("Create product tests", () => {
  const { sut, createProductUsecaseStub } = makeSut();

  const input = {
    name: "valid_name",
    tag: TagType.other,
    value: 0,
  };

  it("Should call createProductUsecase with id", async () => {
    const spyCreate = jest.spyOn(createProductUsecaseStub, "execute");

    await sut.CreateProduct(input);

    expect(spyCreate).toBeCalledWith(input);
  });

  it("Should throw if createProductUsecase throws", () => {
    jest
      .spyOn(createProductUsecaseStub, "execute")
      .mockRejectedValueOnce(new Error());

    const promise = sut.CreateProduct(input);

    return expect(promise).rejects.toThrow();
  });
});
