import React from "react";
import s from "./Ceremonia.module.css";

const Ceremonia = () => {
  return (
    <div className={s.container}>
      <p className={s.titulo}>Ceremonia</p>
      <div className={s.container2}>
        <img
          src="https://res.cloudinary.com/dfaxzahb0/image/upload/v1673921429/Invitaciones/Parroquia_hawhnv.jpg"
          alt=""
        />
        <p className={s.text}>
          La ceremonia será el sábado 22 de abril de 2023 a las 13:00 horas en
          la Parroquia San Miguel Arcángel de Acambay Ruiz Castañeda, Edo. Méx.{" "}
        </p>
      </div>

      <a
        target="_blank"
        rel="noreferrer"
        href={"https://goo.gl/maps/RqH6L8HQ3MVRBg4z6"}
        className={s.btn}
      >
        <i>Ver mapa</i>
      </a>
    </div>
  );
};

export default Ceremonia;
