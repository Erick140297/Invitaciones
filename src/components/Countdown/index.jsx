import React from "react";
import { useCountdown } from "../../Hooks/useCountdown";
import s from "./Countdown.module.css";

const Countdown = () => {
  const targetDate = "April 22, 2023 13:00:00";
  const [days, hours, minutes, seconds, countDown] = useCountdown(targetDate);
  return (
    <div>
      {countDown >= 1000 ? (
        <div className={s.Contador}>
          <div className={s.element}>
            <p className={s.num}>{days}</p>
            <p className={s.text}>Días</p>
          </div>
          <p className={s.puntos}>:</p>
          <div className={s.element}>
            <p className={s.num}>{hours}</p>
            <p className={s.text}>Horas</p>
          </div>
          <p className={s.puntos}>:</p>
          <div className={s.element}>
            <p className={s.num}>{minutes}</p>
            <p className={s.text}>Minutos</p>
          </div>
          <p className={s.puntos}>:</p>
          <div className={s.element}>
            <p className={s.num}>{seconds}</p>
            <p className={s.text}>Segundos</p>
          </div>
        </div>
      ) : (
        <div className={s.end}>
          <h2 className={s.mensaje}>Felicidades </h2>
          <h2 className={s.mensaje}>La espera terminó</h2>
        </div>
      )}
    </div>
  );
};

export default Countdown;
