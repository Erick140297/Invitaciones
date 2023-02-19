import React from "react";
import Countdown from "../Countdown";
import s from "./Portada.module.css";
import ReactAudioPlayer from "react-audio-player";

const Portada = () => {
  return (
    <div className={s.container}>
      <div className={s.text}>
        <h3>Nuestra boda</h3>
        <h2>Liliana y Noel</h2>
        <h3>Sábado 22 de abril de 2023</h3>
      </div>
      <Countdown />
      <br />
      <ReactAudioPlayer src="https://res.cloudinary.com/dfaxzahb0/video/upload/v1676846653/audio/Nick_Cave_The_Bad_Seeds_-_Into_My_Arms_Official_Video_abrq9w.mp4" autoPlay controls />
      <br />
    </div>
  );
};

export default Portada;
