const { ApolloServer } = require("apollo-server");
const { typeDefs } = require("./schema/typeDefs");
const { resolvers } = require("./schema/resolvers");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req, res }) => {
    return {
      req,
      res,
      appName: "GraphQL",
    };
  },
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
