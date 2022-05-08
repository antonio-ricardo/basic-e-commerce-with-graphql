import { StartServer } from './startServer';
import resolvers from "./resolvers";
import typeDefs from "./typeDefs";

console.log('Chegou')

StartServer(typeDefs, resolvers);
