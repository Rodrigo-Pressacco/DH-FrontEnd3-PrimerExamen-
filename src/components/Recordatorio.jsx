import React, { Component } from "react";

export default class Recordatorio extends Component {

   
    render() {
        const { opcion, historial } = this.props;
        //console.log("claseRecordatorio opcion "+opcion);
        //console.log(historial);
        let hist=historial.split("")

        return (
            <div className="recordatorio">
            <h3>Seleccion anterior: {opcion.toUpperCase()}</h3>
            
            <h4>Historial de opciones elegidas: {hist.map((e,i)=><li key={e+i}>{e.toUpperCase()}</li>)}</h4>
            </div>
        );

    }
}
//historial.map( (e) => <p>{e}</p> )