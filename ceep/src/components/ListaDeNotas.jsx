import React, { Component } from "react";
import CardNota from "./CardNota"

class ListaDeNotas extends Component {
  render() {
    return (
      <ul>
         {console.log('Tag JS')} 
        <li>
            <div>Trabalho</div>
          <CardNota/>
        </li>
      </ul>
    )
  }
}

export default ListaDeNotas;
