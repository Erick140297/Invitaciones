import Carrusel from "./components/Carrusel/Carrusel";
import Datos from "./components/Datos";
import Invitación from "./components/Invitacion";
import Portada from "./components/Portada";

function App() {



  return (
    <>
      <Portada/>
      <Invitación invitados={"Erick y Elena"}/>
      <Datos/>
      <Carrusel/>
    </>
  );
}

export default App;
