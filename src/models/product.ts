export namespace ProductModel {
  export enum TagType {
    clothes = "CLOTHES",
    toys = "TOYS",
    food = "FOOD",
    other = "OTHERS",
  }

  export interface Product {
    name: string;
    tag: TagType;
    value: number;
  }

  export interface ProductWithId {
    id: string;
    name: string;
    tag: TagType;
    value: number;
  }
}
