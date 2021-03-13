import React, { Component } from "react";
import FormNotas from "./components/FormNotas";
import ListaDeNotas from "./components/ListaDeNotas";

class App extends Component {
  render() {
    return (
      <section>
        <FormNotas/>
        <ListaDeNotas/>
      </section>
    )
  }
}

export default App;
