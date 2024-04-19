import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./typeDefs.js";
// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
import { resolvers } from "./resolvers.js";

const server = new ApolloServer({
  typeDefs,
  resolvers,
});
const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);
