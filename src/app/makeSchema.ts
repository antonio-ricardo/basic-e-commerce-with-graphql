import { Container } from "inversify";
import { buildSchema } from "type-graphql";
import { CreateProductResolver } from "../graphql/resolvers";

export const MakeSchema = async (container: Container) => {
  return await buildSchema({
    resolvers: [CreateProductResolver],
    emitSchemaFile: true,
    container,
  });
};
