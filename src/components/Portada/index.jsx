import React from "react";
import Countdown from "../Countdown";
import s from "./Portada.module.css";

const Portada = () => {
  return (
    <div className={s.container}>
      <div className={s.text}>
        <h3>Nuestra boda</h3>
        <h2>Liliana y Noel</h2>
        <h3>Sábado 22 de abril de 2023</h3>
      </div>
      <Countdown />
    </div>
  );
};

export default Portada;
