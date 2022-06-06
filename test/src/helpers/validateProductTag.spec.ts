import { ClientBadRequest } from './../../../src/errors/clientBadRequest'
import { TagType } from './../../../src/models'
import { validateProductTag } from './../../../src/helpers/validateProductTag'

describe('Validate Product Tag tests', () => {
  it('Should return sent tag if is valid', () => {
    expect(validateProductTag(TagType.clothes)).toEqual('CLOTHES')
    expect(validateProductTag(TagType.food)).toEqual('FOOD')
    expect(validateProductTag(TagType.other)).toEqual('OTHER')
    expect(validateProductTag(TagType.toys)).toEqual('TOYS')
  })

  it('Should throw clientBadRequest if sent tag is invalid', () => {
    expect(() => validateProductTag('invalid_tag')).toThrowError(
      new ClientBadRequest('Invalid tag sent')
    )
  })
})
