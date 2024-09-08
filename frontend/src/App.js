import "./App.css";
import { ApolloProvider } from "@apollo/client";
import TestGraphQLTest from "./pages/TestGraphQLTest";
import { client } from "./graphql/config";

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <TestGraphQLTest />
      </div>
    </ApolloProvider>
  );
}

export default App;
