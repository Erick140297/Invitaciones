import React from "react";
import s from "./Ceremonia.module.css"

const Ceremonia = () => {
  return (
    <div className={s.container}>
      <p className={s.titulo}>Ceremonia</p>
      <img
        src="https://res.cloudinary.com/dfaxzahb0/image/upload/v1673921429/Invitaciones/Parroquia_hawhnv.jpg"
        alt=""
      />
      <p className={s.parroquia}>Parroquia San Miguel Arcangel</p>
      <br />
      <p className={s.direccion}><b>Acambay Ruiz castañeda, Edo. Méx.</b></p>
      <br />
      <a target="_blank" rel="noreferrer" href={"https://goo.gl/maps/RqH6L8HQ3MVRBg4z6"} className={s.btn} ><i>Ver mapa</i></a>
    </div>
  );
};

export default Ceremonia;
