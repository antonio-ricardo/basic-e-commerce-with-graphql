import { Container } from 'inversify'
import {
CreateProductResolver
} from "../graphql/resolvers"

export const makeResolvers = (container: Container) => {
  container.bind(CreateProductResolver).toSelf().inSingletonScope()
}
