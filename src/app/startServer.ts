import "reflect-metadata";
import 'dotenv/config'
import { ApolloServer } from "apollo-server";
import mongoose from "mongoose";
import { Container } from "inversify";
import { MakeSchema } from "./makers/makeSchema";
import { makeAll } from "./makers/makeAll";

export const StartServer = async () => {
  let container = makeAll(new Container());

  mongoose.connect("mongodb://localhost/toinProject");

  const schema = await MakeSchema(container);

  const server = new ApolloServer({ schema });
  server.listen(process.env.PORT).then(({ url }) => console.log(`Server is running in ${url}`));
};
