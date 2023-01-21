import React from 'react'
import s from "./Itinerario.module.css"

const Itinerario = () => {
  return (
    <div className={s.container}>
      <p className={s.titulo}>Itinerario</p>
      <img
        src="https://res.cloudinary.com/dfaxzahb0/image/upload/v1673915807/Invitaciones/ramo_prqp3s.jpg"
        alt=""
      />
      <p className={s.textI}><b>- Ceremonia 13:00 horas. </b></p>
      <br />
      {/* <p className={s.parroquia}>San Miguel Arcangel</p> */}
      <p className={s.textI}><b>- Recepción 17:00 horas.</b></p>
      <br />
      {/* <button className={s.btn}>Ver mapa</button> */}
    </div>
  );
}

export default Itinerario