import "./App.css";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import PokomonContainer from "./containers/PokomonContainer.jsx";

function App() {
  console.log("in the app")

  //setting up appolo client
  const client = new ApolloClient({
    //initilize it with url
    uri: "https://graphql-pokemon2.vercel.app/",
    // uri: 'https://flyby-router-demo.herokuapp.com/',
    cache: new InMemoryCache(),
  });

  return (
    // use apolloProvider as a components and wrap client in it
    <ApolloProvider client={client}>
      <main>
        <PokomonContainer />
      </main>
    </ApolloProvider>
  );
}
export default App;
