import { ArgsType, Field, ObjectType } from 'type-graphql'
import { TagType } from '../../../models'

@ArgsType()
export class InputCreateProduct {
  @Field()
    name: string

  @Field()
    tag: TagType

  @Field()
    value: number
}

@ArgsType()
export class InputUpdateProduct {
  @Field()
    id: string

  @Field({ nullable: true })
    name?: string

  @Field({ nullable: true })
    tag?: TagType

  @Field({ nullable: true })
    value?: number
}

@ObjectType()
export class OutputDeleteProduct {
  @Field()
    hasDeleted: boolean
}
