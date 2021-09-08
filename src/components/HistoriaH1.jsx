import React, { Component } from "react";

export default class HistoriaH1 extends Component {

   

    render() {
        const { registro } = this.props;

        return (
            
            <>
            <h1 className="historia">{registro.historia}</h1>
            
            </>
        );

    }
}
//<h1 className="historia">{registro.historia}</h1>
//registro.historia== null?null:registro.historia