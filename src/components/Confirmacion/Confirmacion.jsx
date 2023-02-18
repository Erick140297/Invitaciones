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
      <p className={s.nota}>
        NOTA: Sí te encuentras en la CDMX y no tienes opción de transporte,
        infórmanos en el mismo link de confirmación de asistencia para
        contemplarte en un transporte que te llevará al lugar del evento y te
        traerá de vuelta a la CDMX.
      </p>
    </div>
  );
};

export default Confirmacion;

const WhatsappIcon = styled(SiWhatsapp)`
  color: white;
`;
