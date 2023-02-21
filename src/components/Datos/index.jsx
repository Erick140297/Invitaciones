import React from "react";
import s from "./Datos.module.css";
import Ceremonia from "../Ceremonia";
import Recepcion from "../Recepcion";

const Datos = () => {
  return (
    <div className={s.container}>
      <h2 className={s.frase}>
        <b>¿Dónde será?</b>
      </h2>
      <div className={s.componentes}>
        <Ceremonia />
        <Recepcion />
      </div>
    </div>
  );
};

export default Datos;
