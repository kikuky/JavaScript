import React, { Component } from "react";

class FormNotas extends Component {
  render() {
    return (
      <form>
        <input type="text" placeholder="Titulo" />
        <textarea placeholder="Escreva a sua nota..." />
        <button>Criar nota</button>
      </form>
    )
  }
}

export default FormNotas;