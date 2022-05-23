import { Container } from "inversify";
import { buildSchema } from "type-graphql";
import { CreateProductResolver, DeleteProductResolver, GetProductResolver, UpdateProductResolver } from "../../graphql/resolvers";

export const MakeSchema = async (container: Container) => {
  return await buildSchema({
    resolvers: [GetProductResolver, CreateProductResolver, DeleteProductResolver, UpdateProductResolver ],
    emitSchemaFile: true,
    container,
  });
};
