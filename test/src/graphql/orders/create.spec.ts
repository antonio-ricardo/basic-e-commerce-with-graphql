import { createOrderUsecaseStub } from '../../../stubs'
import { CreateOrderResolver } from './../../../../src/graphql/resolvers'
import { makeProductForOrder } from '../../../factories/product'

const makeSut = () => {
  const sut = new CreateOrderResolver(createOrderUsecaseStub)

  return {
    sut,
    createOrderUsecaseStub
  }
}

describe('Create order resolver tests', () => {
  const { sut, createOrderUsecaseStub } = makeSut()

  const productForOrder = makeProductForOrder()

  const input = {
    buyer: '000000000000000000000000',
    products: [productForOrder]
  }

  beforeAll(() => {
    jest.useFakeTimers()
  })

  it('Should call CreateOrderUsecase with id', async () => {
    const spyCreate = jest.spyOn(createOrderUsecaseStub, 'execute')

    await sut.CreateOrder('000000000000000000000000', [productForOrder])

    expect(spyCreate).toBeCalledWith(input)
  })

  it('Should throw if CreateOrderUsecase throws', () => {
    jest
      .spyOn(createOrderUsecaseStub, 'execute')
      .mockRejectedValueOnce(new Error())

    const promise = sut.CreateOrder('000000000000000000000000', [
      productForOrder
    ])

    return expect(promise).rejects.toThrow()
  })
})
