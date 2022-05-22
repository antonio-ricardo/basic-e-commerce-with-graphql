import { Container } from "inversify";
import {
  CreateProductResolver,
  DeleteProductResolver,
  UpdateProductResolver,
} from "../../graphql/resolvers";

export const makeResolvers = (container: Container) => {
  container.bind(CreateProductResolver).toSelf().inSingletonScope();
  container.bind(UpdateProductResolver).toSelf().inSingletonScope();
  container.bind(DeleteProductResolver).toSelf().inSingletonScope();
};
