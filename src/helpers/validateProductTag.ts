import { TagType } from './../models/product'
import { ClientBadRequest } from '../errors'

export const validateProductTag = (tag: string) => {
  const validTags: string[] = Object.values(TagType)

  const isInvalidTag = !validTags.includes(tag)

  if (isInvalidTag) {
    throw new ClientBadRequest('Invalid tag sent')
  }

  return tag
}
