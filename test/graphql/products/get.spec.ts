import { getProductUsecaseStub } from "../../stubs";
import { GetProductResolver } from "./../../../src/graphql/resolvers";

const makeSut = () => {
  const sut = new GetProductResolver(getProductUsecaseStub);

  return {
    sut,
    getProductUsecaseStub,
  };
};

describe("Get product tests", () => {
  const { sut, getProductUsecaseStub } = makeSut();

  it("Should call getProductUsecase with id", async () => {
    const spyGet = jest.spyOn(getProductUsecaseStub, "execute");

    await sut.GetProduct("valid_id");

    expect(spyGet).toBeCalledWith("valid_id");
  });

  it("Should throw if getProductUsecase throws", () => {
    jest
      .spyOn(getProductUsecaseStub, "execute")
      .mockRejectedValueOnce(new Error());

    const promise = sut.GetProduct("valid_id");

    return expect(promise).rejects.toThrow();
  });
});
