import React from "react";
import s from "./Canciones.module.css";

const Canciones = () => {
  return (
    <div className={s.container}>
      <h2 >¿Qué canciones no pueden faltar en la fiesta?</h2>
      <a
        className={s.btnC}
        target="_blank"
        rel="noreferrer"
        href="https://docs.google.com/forms/d/11_91LGOhupqVopl15PMugKL9sEkt5zu5yBvBoxl-duY/edit?usp=drivesdk"
      >
        Recomendar
      </a>
      <br /><br />
      <h2 >Sugerencias de regalos</h2>
      <a
        className={s.btnC}
        target="_blank"
        rel="noreferrer"
        href="https://forms.gle/govZa3Jm8aKSaaZk9"
      >
        Sugerir
      </a>
    </div>
  );
};

export default Canciones;
