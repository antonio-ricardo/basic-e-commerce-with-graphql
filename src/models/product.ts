export enum TagType {
  clothes = "CLOTHES",
  toys = "TOYS",
  food = "FOOD",
  other = "OTHERS",
}

export namespace ProductModel {
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

export namespace ProductContracts {
  export namespace Inputs {
    export interface DeleteProduct {
      id: string;
    }

    export interface UpdateProduct extends DeleteProduct {
      name?: string;
      tag?: TagType;
      value?: number;
    }
  }

  export namespace Outputs {
    export interface DeleteProduct {
      hasDeleted: boolean;
    }
  }

  export interface CreateProduct {
    execute(input: ProductModel.Product): Promise<ProductModel.ProductWithId>
  }

  export interface UpdateProduct {
    execute(input: Inputs.UpdateProduct): Promise<ProductModel.ProductWithId>
  }

  export interface DeleteProduct {
    execute(input: Inputs.DeleteProduct): Promise<Outputs.DeleteProduct>
  }
}
