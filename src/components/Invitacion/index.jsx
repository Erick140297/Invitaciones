import React from "react";
import s from "./Invitacion.module.css";

const Invitación = () => {
  return (
    <div className={s.container}>
      <h3>Invitación válida para:</h3>
      <h2>Erick y Elena</h2>
      <h3>2 pases</h3>
      <div className={s.text}>
        <p>Presentar invitación digital</p>
        <p>para acceso al evento</p>
      </div>
    </div>
  );
};

export default Invitación;
