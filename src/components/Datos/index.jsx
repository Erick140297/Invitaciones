import React from "react";
import s from "./Datos.module.css";
import Ceremonia from "../Ceremonia";
import Recepcion from "../Recepcion";
import Itinerario from "../Itinerario";

const Datos = () => {
  return (
    <div className={s.container}>
      <h2 className={s.frase}>¿Dónde será?</h2>
      <div className={s.componentes}>
        <Ceremonia />
        <Recepcion />
        <Itinerario/>
      </div>
    </div>
  );
};

export default Datos;
