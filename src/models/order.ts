export type TagType = ['CLOTHES', 'TOYS', 'FOOD', 'OTHERS']

export namespace OrderModel {

    export namespace Inputs {
        export interface CreateOrder {
            name: string
            tag: TagType
            value: number
        }
    }
}