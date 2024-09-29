import "./App.css";
import { ApolloProvider } from "@apollo/client";
import TestGraphQLTest from "./pages/TestGraphQLTest";
import { client } from "./graphql/config";

function App() {
  console.log(client.getMemoryInternals());
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <TestGraphQLTest />
      </div>
    </ApolloProvider>
  );
}

export default App;
