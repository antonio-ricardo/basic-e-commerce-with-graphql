import { mock } from 'jest-mock-extended'
import { ProductContracts } from '../../../../src/models'
import { makeProductWithId } from '../../../factories/product'

export const updateProductUsecaseStub = mock<ProductContracts.UpdateProduct>({
  execute: () => Promise.resolve(makeProductWithId())
})
