import React, { Component } from "react";
import data from "./components/data.json"
import Eleccion from "./components/Eleccion";
import HistoriaH1 from "./components/HistoriaH1";
import Recordatorio from "./components/Recordatorio";

export default class App extends Component {


  state = {
    data: [],
    registro: data[0],
    contador: 1,
    opcion: "",
    historial: ""
  }

  componentDidMount() {
    this.setState({ data: data });
  }

  handleSelected = (id) => {

    this.setState({ opcion: id })
    this.state.historial = this.state.historial + id
    this.state.contador++

    //console.log("Primero "+ this.state.opcion);



    // console.log(id);
  };





  render() {


    return (

      <div className="App">
        <div className="layout">


          {this.state.contador <6 ?
          this.state.contador == 1 ?
            <>
              <HistoriaH1 key={this.state.contador+1} registro={this.state.registro} />
              <Eleccion key={this.state.contador+2} registro={this.state.registro} onSelect={this.handleSelected} />
            </>
            : this.state.data.map((e,i) => {
              let h = e.id.split("")
              if (h[1] == this.state.opcion && h[0] == this.state.contador) {
                return <>
                  <HistoriaH1 key={this.state.contador + this.state.opcion} registro={e} />
                  <Eleccion key={this.state.opcion + this.state.contador} registro={e} onSelect={this.handleSelected} />
                </>
              }
            })
          :alert("Se acabo la historia")
          }


          <Recordatorio opcion={this.state.opcion} historial={this.state.historial} />
        </div>
      </div>
    );

  }
}
//<HistoriaH1 data={this.state.data} registro={this.state.registro} opcion={this.state.opcion}/>

