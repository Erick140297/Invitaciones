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
    </div>
  );
};

export default Confirmacion;

const WhatsappIcon = styled(SiWhatsapp)`
  color: white;
`;
