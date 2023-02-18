import React from "react";
import styled from "styled-components";
import { SiWhatsapp } from "react-icons/si";
import s from "./Confirmacion.module.css";

const Confirmacion = () => {
  return (
    <div className={s.container}>
      <h2>Confirma tu asistencia</h2>
      <a
        className={s.btnW}
        target="_blank"
        rel="noreferrer"
        href="https://chat.whatsapp.com/KKYHLBzs6iI8V0mEMsmmeW"
      >
        <span>Confirma por WhatsApp</span>
        <WhatsappIcon />
      </a>
      <div className={s.recomendacion}>
        <h3>
          Recomiendanos canciones para el evento.
        </h3>
        <a className={s.btnC}
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
