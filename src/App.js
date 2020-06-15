import * as React from "react";
import { Component } from "react";
import buildGraphQLProvider from "ra-data-graphql-simple";
import { Admin, Resource, ListGuesser } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import { ListGraph } from "./components/ListGraph";
import { Dashboard } from "./components/Dashboard";

class App extends Component {
  constructor() {
    super();
    this.state = { dataProvider: null };
  }
  componentDidMount() {
    buildGraphQLProvider({
      clientOptions: { uri: "http://localhost:4000" },
    }).then((dataProvider) => this.setState({ dataProvider }));
  }

  render() {
    const { dataProvider } = this.state;

    if (!dataProvider) {
      return <div>Loading</div>;
    } else {
      return (
        <Admin dataProvider={dataProvider} dashboard={Dashboard}>
          <Resource
            name="Movies"
            options={{ label: "Film" }}
            list={ListGraph}
          />
        </Admin>
      );
    }
  }
}

export default App;
