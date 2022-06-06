export enum TagType {
  clothes = 'CLOTHES',
  toys = 'TOYS',
  food = 'FOOD',
  other = 'OTHER',
}

export namespace ProductModel {
  export interface Product {
    name: string;
    tag: TagType;
    value: number;
  }

  export interface ProductCreated extends Product {
    createdAt: Date;
    updatedAt: Date;
    id: string;
  }

  export interface ProductForOrder extends ProductCreated {
    quantity: number;
  }
}

export namespace ProductContracts {
  export namespace Inputs {
    export interface Base {
      id: string;
    }

    export interface UpdateProduct extends Base {
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

  export interface GetProduct {
    execute(id: string): Promise<ProductModel.ProductCreated>;
  }

  export interface CreateProduct {
    execute(input: ProductModel.Product): Promise<ProductModel.ProductCreated>;
  }

  export interface UpdateProduct {
    execute(input: Inputs.UpdateProduct): Promise<ProductModel.ProductCreated>;
  }

  export interface DeleteProduct {
    execute(input: Inputs.Base): Promise<Outputs.DeleteProduct>;
  }
}
