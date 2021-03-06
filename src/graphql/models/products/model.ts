import { Field, ObjectType } from 'type-graphql'
import { TagType } from '../../../models'

@ObjectType()
export class ProductCreated {
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
}

@ObjectType()
export class ProductForOrderModel extends ProductCreated {
  @Field()
    quantity: number
}
