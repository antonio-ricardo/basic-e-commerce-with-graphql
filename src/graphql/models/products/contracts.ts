import { ArgsType, Field } from "type-graphql";
import { TagType } from "../../../models";



@ArgsType()
export class InputCreateProduct {
    @Field()
    name: string

    @Field()
    tag: TagType

    @Field()
    value: number
}
