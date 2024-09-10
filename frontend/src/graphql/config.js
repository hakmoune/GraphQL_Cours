import { ApolloClient, InMemoryCache } from "@apollo/client";
import { persistCache } from "apollo-cache-persist";

const cache = new InMemoryCache();

// Persist the cache to localStorage
persistCache({
  cache,
  storage: window.localStorage, // Use localStorage for persistence
});

export const client = new ApolloClient({
  cache,
  uri: "http://localhost:4000/", // Connect with Apollo Server
});
