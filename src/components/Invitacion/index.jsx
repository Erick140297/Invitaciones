import React from "react";
import s from "./Invitacion.module.css";

const Invitación = () => {
  return (
    <div className={s.container}>
      <h2 className={s.frase}>Invitación: </h2>
    
      <div className={s.text}>
      <h3 >Hay momentos en la vida que son muy especiales por si solos pero al compartirlos con personas tan especiales como tú, se convierten en momentos imposibles de olvidar.</h3>
      </div>
    </div>
  );
};

export default Invitación;
