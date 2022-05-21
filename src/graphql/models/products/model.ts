import { Field, ObjectType } from "type-graphql"
import { TagType } from "../../../models"


@ObjectType()
export class ProductWithId {
    @Field()
    id: string

    @Field()
    name: string

    @Field()
    tag: TagType

    @Field()
    value: number
}
