import React from "react";
import s from "./Padres.module.css";

const Card = ({ imagen, mujer, hombre, titulo }) => {
  return (
    <div className={s.card}>
      <img src={imagen} alt={imagen} />
      <h3 className={s.titulo}>{titulo}</h3>
      <h3 className={s.text}>{mujer}</h3>
      <h3 className={s.text}>{hombre}</h3>
    </div>
  );
};

export default Card;
