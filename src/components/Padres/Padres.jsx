import React from "react";
import Card from "./Card";
import s from "./Padres.module.css";

const Padres = () => {
  const papasLiliana =
    "https://res.cloudinary.com/dfaxzahb0/image/upload/v1676765033/Fotos%20Lili/papasLiliana_orv3jr.jpg";

  const papasNoel =
    "https://res.cloudinary.com/dfaxzahb0/image/upload/v1676765033/Fotos%20Lili/papasNoe_iqxewc.jpg";

  return (
    <div className={s.container}>
      <h2>Nuestros Padres:</h2>
      <div className={s.cards}>
        <Card
          imagen={papasLiliana}
          mujer={"Elvia Jacinto"}
          hombre={"José Jiménez"}
          titulo={"Papás de la novia"}
        />
        <Card
          imagen={papasNoel}
          mujer={"Silvia Escudero"}
          hombre={"Noel Andrés"}
          titulo={"Papás del novio"}
        />
        <Card
          imagen={"padrinos"}
          mujer={"Isaura Escudero"}
          hombre={"David Contreras"}
          titulo={"Padrinos"}
        />
      </div>

      {/* <div className={s.containerP}>
    
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
      </div> */}
    </div>
  );
};

export default Padres;
