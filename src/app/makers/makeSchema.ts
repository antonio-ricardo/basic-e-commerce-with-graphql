import { Container } from 'inversify'
import { buildSchema } from 'type-graphql'
import {
  CreateProductResolver,
  DeleteProductResolver,
  GetProductResolver,
  UpdateProductResolver,
  CreateOrderResolver
} from '../../graphql/resolvers'

export const MakeSchema = async (container: Container) => {
  return await buildSchema({
    resolvers: [
      GetProductResolver,
      CreateProductResolver,
      DeleteProductResolver,
      UpdateProductResolver,
      CreateOrderResolver
    ],
    emitSchemaFile: true,
    container
  })
}
