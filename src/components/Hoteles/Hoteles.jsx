import React from "react";
import s from "./Hoteles.module.css";

const Hoteles = () => {
  return (
    <div className={s.container}>
      <h2>
        <b>Opciones de Hoteles</b>
      </h2>
      <div>
        <h3>En Acambay</h3>
        <div className={s.hoteles}>
          <div className={s.hotel}>
            <h4>La Huerta</h4>
            <a
              target="_blank"
              rel="noreferrer"
              href={"https://goo.gl/maps/Gz64NXVYzqJ3Y5Wt8"}
              className={s.btn}
            >
              <i>Ver hotel</i>
            </a>
          </div>
          <div className={s.hotel}>
            <h4>Hotel Acambay</h4>
            <a
              target="_blank"
              rel="noreferrer"
              href={"https://goo.gl/maps/vpyoAkCUdyuLXryc9"}
              className={s.btn}
            >
              <i>Ver hotel</i>
            </a>
          </div>
        </div>
        <h3>En Temascalcingo</h3>
        <div className={s.hoteles}>
          <div className={s.hotel}>
            <h4>Hotel Villa Real </h4>
            <a
              target="_blank"
              rel="noreferrer"
              href={"https://goo.gl/maps/EzZX22kscsYK1Eo4A"}
              className={s.btn}
            >
              <i>Ver hotel</i>
            </a>
          </div>
          <div className={s.hotel}>
            <h4>Hotel familiar san Juan</h4>
            <a
              target="_blank"
              rel="noreferrer"
              href={"https://goo.gl/maps/nvJer1a4GU9gUDq66"}
              className={s.btn}
            >
              <i>Ver hotel</i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hoteles;
