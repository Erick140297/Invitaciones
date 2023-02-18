import React from "react";
import s from "./Historia.module.css";

const Historia = () => {
  return (
    <div className={s.container}>
      <h2>Nuestra Historia</h2>
      <h3>
        "En nuestras charlas, miradas y besos nos dimos cuenta de que habíamos
        encontrado algo especial. Este tiempo compartido ha sido hermoso, y es
        apenas el principio de un nuevo viaje lleno de emociones"
      </h3>
      <div className={s.fotos}>
        <img className={s.foto}
          src="https://res.cloudinary.com/dfaxzahb0/image/upload/v1676601148/Fotos%20Lili/20_la9qy7.jpg"
          alt="1"
        />
        <img className={s.foto}
          src="https://res.cloudinary.com/dfaxzahb0/image/upload/v1676601151/Fotos%20Lili/22_e9whis.jpg"
          alt="2"
        />
        <img className={s.foto}
          src="https://res.cloudinary.com/dfaxzahb0/image/upload/v1676601149/Fotos%20Lili/23_j4efps.jpg"
          alt="3"
        />
      </div>
    </div>
  );
};

export default  Historia
