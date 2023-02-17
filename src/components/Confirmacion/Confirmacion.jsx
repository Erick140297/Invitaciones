import React from "react";
import styled from "styled-components";
import { SiWhatsapp } from "react-icons/si";
import s from "./Confirmacion.module.css";

const Confirmacion = () => {
  return (
    <div className={s.container}>
      <h2>Confirmación </h2>
      <a
        className={s.btnW}
        target="_blank"
        rel="noreferrer"
        href="https://wa.link/ao4jb7"
      >
        <span>Confirma por WhatsApp</span>
        <WhatsappIcon />
      </a>
      <div>
        <span>
          Nos ayudaria mucho que nos recomiendes canciones para el evento.
        </span>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://forms.gle/6yMy9UrvLUkWw7YG6"
        >Recomendar</a>
      </div>
    </div>
  );
};

export default Confirmacion;

const WhatsappIcon = styled(SiWhatsapp)`
  color: white;
`;
