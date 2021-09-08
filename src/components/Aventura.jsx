import React, { Component } from "react";
import Eleccion from "./Eleccion";
import HistoriaH1 from "./HistoriaH1";
import Recordatorio from "./Recordatorio";

export default class Aventura extends Component {

    handleSelect = () => {
        this.props.onSelect(this.props.id, this.props.title);
      };

    render() {
        const { data, registro, opcion } = this.props;
        console.log(data[0].id);


        return (
            <>
            <HistoriaH1 data={data} registro={registro}/>
            <Eleccion/>
            <Recordatorio/>
            </>
        );

    }
}