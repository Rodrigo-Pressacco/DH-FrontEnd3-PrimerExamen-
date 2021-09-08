import React, { Component } from "react";

export default class Recordatorio extends Component {


    render() {
        const { opcion, historial, contador } = this.props;
        //console.log("claseRecordatorio opcion "+opcion);
        //console.log(historial);
        let historialSplit = historial.split("")

        return (
            <div className="recordatorio">
                {contador < 6 ?
                    <>
                        <h3>Seleccion anterior: {opcion.toUpperCase()}</h3>
                        <h4>Historial de opciones elegidas: {historialSplit.map((e, i) => <li key={e + i}>{e.toUpperCase()}</li>)}</h4>
                    </>
                    : <></>}
            </div>
        )

    }
}
//historial.map( (e) => <p>{e}</p> )