import React, { Component } from "react";
import swal from 'sweetalert';
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

  terminoLaAventura = ()=>{
    swal("La aventura a  terminado")
  }

  empezarDeNuevo =()=>{
    this.setState({data: [],
      registro: data[0],
      contador: 1,
      opcion: "",
      historial: ""})
  }


  render() {

    return (

      <div className="App">
        <div className="layout">


          {this.state.contador <6 ?
          this.state.contador == 1 ?
            <>
              <HistoriaH1 registro={this.state.registro} />
              <Eleccion registro={this.state.registro} onSelect={this.handleSelected} />
            </>
            : this.state.data.map((element,i) => {              
              let elementSplit = element.id.split("")

              if (elementSplit[0] == this.state.contador && elementSplit[1] == this.state.opcion) {

                return <div key={i}>
                  <HistoriaH1 key={this.state.contador + this.state.opcion} registro={element} />
                  <Eleccion key={this.state.opcion + this.state.contador} registro={element} onSelect={this.handleSelected} />
                </div>                
              }
            })
          :<> {this.terminoLaAventura()} </>
          }


          <Recordatorio opcion={this.state.opcion} historial={this.state.historial} contador={this.state.contador} />
        </div>
      </div>
    );

  }
}
//<HistoriaH1 data={this.state.data} registro={this.state.registro} opcion={this.state.opcion}/>

