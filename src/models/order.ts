import { ProductModel } from './product'

export enum Status {
  created = 'CREATED',
  requested = 'REQUESTED',
}

export namespace OrderModel {
  export interface Order {
    buyer: string;
    status: Status;
    products: ProductModel.ProductForOrder[];
    total: number;
    createdAt: Date;
    updatedAt: Date;
  }

  export interface OrderWithId extends Order {
    id: string;
  }
}

export namespace OrderContracts {
  export namespace Inputs {
    export interface CreateOrder {
      buyer: string;
      products: ProductModel.ProductForOrder[];
    }
  }

  export interface CreateOrder {
    execute(input: Inputs.CreateOrder): Promise<OrderModel.OrderWithId>;
  }
}
