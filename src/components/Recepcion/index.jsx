import React from "react";
import s from "./Recepcion.module.css";

const Recepcion = () => {
  return (
    <div className={s.container}>
      <p className={s.titulo}>Recepción</p>
      <div className={s.container2}>
        <img
          src="https://res.cloudinary.com/dfaxzahb0/image/upload/v1674090034/Invitaciones/salon_zhztds.png"
          alt=""
        />
        <p className={s.text}>
          La fiesta será el sábado 22 de abril del 2023 los esperamos a las 16
          horas en el salón Quinta La Esperanza, ubicada en Temascalcingo, Edo.
          Méx.
        </p>
      </div>

      <a
        target="_blank"
        rel="noreferrer"
        href={"https://goo.gl/maps/NxUfDwstpKm86EEB7"}
        className={s.btn}
      >
        <i>Ver mapa</i>
      </a>
    </div>
  );
};

export default Recepcion;
