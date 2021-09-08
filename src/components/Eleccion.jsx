import React, { Component } from "react";

export default class Eleccion extends Component {

    handleSelectA = () => {
        
        this.props.onSelect("a")

    }

    handleSelectB = () => {
        this.props.onSelect("b")
    }

    render() {
        const { registro } = this.props;

        return (
            <div className="opciones">

                <div className="opcion">
                    <p><button className="botones" onClick={this.handleSelectA}>A</button> {registro.opciones.a}</p>
                </div>

                <div className="opcion">
                    <p><button className="botones" onClick={this.handleSelectB}>B</button> {registro.opciones.b}</p>
                </div>

            </div>
        );

    }
}
//registro.opciones.b
//registro.opciones.b== null?null:registro.opciones.b