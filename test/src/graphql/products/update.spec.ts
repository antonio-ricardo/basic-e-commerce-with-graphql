import { TagType } from '../../../../src/models'
import { updateProductUsecaseStub } from '../../../stubs'
import { UpdateProductResolver } from './../../../../src/graphql/resolvers'

const makeSut = () => {
  const sut = new UpdateProductResolver(updateProductUsecaseStub)

  return {
    sut,
    updateProductUsecaseStub
  }
}

describe('Update product resolver tests', () => {
  const { sut, updateProductUsecaseStub } = makeSut()

  const input = {
    id: 'valid_id',
    name: 'valid_name',
    tag: TagType.other,
    value: 0
  }

  it('Should call updateProductUsecase with id', async () => {
    const spyUpdate = jest.spyOn(updateProductUsecaseStub, 'execute')

    await sut.UpdateProduct(input)

    expect(spyUpdate).toBeCalledWith(input)
  })

  it('Should throw if updateProductUsecase throws', () => {
    jest
      .spyOn(updateProductUsecaseStub, 'execute')
      .mockRejectedValueOnce(new Error())

    const promise = sut.UpdateProduct(input)

    return expect(promise).rejects.toThrow()
  })
})
