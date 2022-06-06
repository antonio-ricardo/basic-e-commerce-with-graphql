import { Field, ObjectType } from 'type-graphql'
import { Status } from '../../../models'
import { ProductForOrderModel } from '../products/model'

@ObjectType()
export class OrderWithId {
  @Field()
    id: string

  @Field()
    buyer: string

  @Field()
    status: Status

  @Field(() => [ProductForOrderModel])
    products: ProductForOrderModel[]

  @Field()
    total: number

  @Field()
    createdAt: Date

  @Field()
    updatedAt: Date
}
