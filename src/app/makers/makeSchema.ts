import { Container } from "inversify";
import { buildSchema } from "type-graphql";
import { CreateProductResolver, DeleteProductResolver, UpdateProductResolver } from "../../graphql/resolvers";

export const MakeSchema = async (container: Container) => {
  return await buildSchema({
    resolvers: [CreateProductResolver, DeleteProductResolver, UpdateProductResolver],
    emitSchemaFile: true,
    container,
  });
};
