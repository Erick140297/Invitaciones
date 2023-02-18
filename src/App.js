import Carrusel from "./components/Carrusel/Carrusel";
import Confirmacion from "./components/Confirmacion/Confirmacion";
import Datos from "./components/Datos";
import Historia from "./components/Historia/Historia";
import Hoteles from "./components/Hoteles/Hoteles";
import Invitación from "./components/Invitacion";
import Novios from "./components/Novios/Novios";
import Padres from "./components/Padres/Padres";
import Portada from "./components/Portada";
import Itinerario from "./components/Itinerario/index";
import Canciones from "./components/Canciones/Canciones";

function App() {

  return (
    <>
      <Portada/>
      <Invitación invitados={"Erick y Elena"}/>
      <Novios/>
      <Padres/>
      <Historia/>
      <Carrusel/>
      <Datos/>
      <Hoteles/>
      <Itinerario/>
      <Confirmacion/>
      <Canciones/>
    </>
  );
}

export default App;
