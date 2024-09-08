import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "http://localhost:4000/", // Connect with Apollo Server
  cache: new InMemoryCache(),
});
