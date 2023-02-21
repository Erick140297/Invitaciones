import React from "react";
import s from "./Itinerario.module.css";

const Itinerario = () => {
  return (
    <div className={s.container}>
      <h2>
        <b>Itinerario</b>
      </h2>
      <h3>13:00 horas: Misa religiosa</h3>
      <h3>16:00 horas: Recepción</h3>
      <h3>16:30 horas: Boda Civil</h3>
      <h3>17:30 horas: Banquete</h3>
      <h3>18:30 horas: Inicio de baile</h3>
      <h3>00:00 horas: Espectáculo sorpresa</h3>
    </div>
  );
};

export default Itinerario;
