import React, { Component } from "react";
import FormNotas from "./components/FormNotas/";
import ListaDeNotas from "./components/ListaDeNotas/";
import "./assets/index.css";
import "./assets/app.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      notas: [],
    };
  }
  criarNota(titulo, texto) {
    const novaNota = { titulo, texto };
    const novoArrayNotas = [...this.state.notas, novaNota];
    const novoEstado = {
      notas: novoArrayNotas,
    };
    this.setState(novoEstado);
  }
  render() {
    return (
      <section className="conteudo">
        <FormNotas criarNota={this.criarNota.bind(this)} />
        <ListaDeNotas notas={this.state.notas} />
      </section>
    );
  }
}

export default App;
