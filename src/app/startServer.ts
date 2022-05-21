import "reflect-metadata";
import { ApolloServer } from "apollo-server";
import mongoose from "mongoose";
import { Container } from "inversify";
import { MakeSchema } from "./makeSchema";
import { makeAll } from "./makeAll";

export const StartServer = async () => {
  let container = makeAll(new Container());

  mongoose.connect("mongodb://localhost/toinProject");

  const schema = await MakeSchema(container);

  const server = new ApolloServer({ schema });
  server.listen().then(({ url }) => console.log(`Server is running in ${url}`));
};
