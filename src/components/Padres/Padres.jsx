import React from "react";
import s from "./Padres.module.css";

const Padres = () => {
  return (
    <div className={s.container}>
      <h2>Nuestros Padres:</h2>
      <div className={s.containerP}>
        <div className={s.card}>
          <h3>Elvia Jacinto</h3>
          <h4>Mamá de la novia</h4>
        </div>
        <div className={s.card}>
          <h3>José Jiménez</h3>
          <h4>Papá de la novia</h4>
        </div>
        <div className={s.card}>
          <h3>Silvia Escudero</h3>
          <h4>Mamá del novio</h4>
        </div>
        <div className={s.card}>
          <h3>Noel Andrés</h3>
          <h4>Papá del novio</h4>
        </div>
      </div>
      <div className={s.card}>
        <h3>Isaura Escudero y David Contreras</h3>
        <h4>Padrinos de velación</h4>
      </div>
    </div>
  );
};

export default Padres;
