import { IResolvers, TypeSource } from "@graphql-tools/utils";
import { ApolloServer } from "apollo-server"
import mongoose from "mongoose";

export const StartServer = (typeDefs: TypeSource , resolvers: IResolvers) => {
  mongoose.connect('mongodb://localhost/nilcaProject');

  const server = new ApolloServer({ typeDefs, resolvers });
  server.listen().then(({ url }) => console.log(`Server is running in ${url}`));
};