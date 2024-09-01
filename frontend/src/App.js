import "./App.css";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import Users from "./Users";

function App() {
  const client = new ApolloClient({
    uri: "http://localhost:4000/", // Connect with Apollo Server
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <div className="App">
        <h1>List of Users.</h1>
        <Users />
      </div>
    </ApolloProvider>
  );
}

export default App;
