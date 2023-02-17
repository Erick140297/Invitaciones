import React from "react";
import s from "./Invitacion.module.css";

const Invitación = () => {
  return (
    <div className={s.container}>
      <h2 className={s.frase}>Invitación: </h2>
    
      <div className={s.text}>
      <h3 >En este día tan especial para nosotros nos gustaría que compartas nuestra felicidad asistiendo a nuestra boda.</h3>
      </div>
    </div>
  );
};

export default Invitación;
