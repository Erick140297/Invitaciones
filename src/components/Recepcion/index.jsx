import React from 'react'
import s from "./Recepcion.module.css"

const Recepcion = () => {
  return (
    <div className={s.container}>
      <p className={s.titulo}>Recepción</p>
      <img
        src="https://res.cloudinary.com/dfaxzahb0/image/upload/v1674090034/Invitaciones/salon_zhztds.png"
        alt=""
      />
      <p className={s.parroquia}>Salón Quinta La Ezperanza</p>
      <br />
      {/* <p className={s.parroquia}>San Miguel Arcangel</p> */}
      <p className={s.direccion}><b>Temascalcingo, Edo. Méx.</b></p>
      <br />
      <a target="_blank" rel="noreferrer" href={"https://goo.gl/maps/NxUfDwstpKm86EEB7"} className={s.btn} ><i>Ver mapa</i></a>
    </div>
  );
}

export default Recepcion