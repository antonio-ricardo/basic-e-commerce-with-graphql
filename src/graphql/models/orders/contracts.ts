import { Field, InputType } from 'type-graphql'
import { TagType } from '../../../models'

@InputType()
export class ProductForOrderInput {
  @Field()
    id: string

  @Field()
    name: string

  @Field()
    tag: TagType

  @Field()
    value: number

  @Field()
    createdAt: Date

  @Field()
    updatedAt: Date

  @Field()
    quantity: number
}
