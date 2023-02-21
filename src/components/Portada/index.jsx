import React from "react";
import Countdown from "../Countdown";
import s from "./Portada.module.css";
import ReactAudioPlayer from "react-audio-player";

const Portada = () => {
  return (
    <div className={s.container}>
      <div className={s.text}>
        <h3>Nuestra boda</h3>
        <h2>
          <b>Liliana y Noel</b>
        </h2>
        <h3>Sábado 22 de abril de 2023</h3>
      </div>
      <Countdown />
      <br />
      <ReactAudioPlayer
        src="https://res.cloudinary.com/dfaxzahb0/video/upload/v1676850798/audio/Yellow_-_Coldplay_Lyrics_ejyr9s.mp4"
        autoPlay
        controls
      />
      <br />
    </div>
  );
};

export default Portada;
