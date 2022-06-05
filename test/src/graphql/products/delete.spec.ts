import { deleteProductUsecaseStub } from '../../../stubs'
import { DeleteProductResolver } from './../../../../src/graphql/resolvers'

const makeSut = () => {
  const sut = new DeleteProductResolver(deleteProductUsecaseStub)

  return {
    sut,
    deleteProductUsecaseStub
  }
}

describe('Delete product resolver tests', () => {
  const { sut, deleteProductUsecaseStub } = makeSut()

  it('Should call deleteProductUsecase with id', async () => {
    const spyDelete = jest.spyOn(deleteProductUsecaseStub, 'execute')

    await sut.DeleteProduct('valid_id')

    expect(spyDelete).toBeCalledWith({ id: 'valid_id' })
  })

  it('Should throw if deleteProductUsecase throws', () => {
    jest
      .spyOn(deleteProductUsecaseStub, 'execute')
      .mockRejectedValueOnce(new Error())

    const promise = sut.DeleteProduct('valid_id')

    return expect(promise).rejects.toThrow()
  })
})
