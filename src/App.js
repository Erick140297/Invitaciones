import Carrusel from "./components/Carrusel/Carrusel";
import Confirmacion from "./components/Confirmacion/Confirmacion";
import Datos from "./components/Datos";
import Invitación from "./components/Invitacion";
import Novios from "./components/Novios/Novios";
import Padres from "./components/Padres/Padres";
import Portada from "./components/Portada";

function App() {



  return (
    <>
      <Portada/>
      <Invitación invitados={"Erick y Elena"}/>
      <Novios/>
      <Padres/>
      <Carrusel/>
      <Datos/>
      <Confirmacion/>
    </>
  );
}

export default App;
