import Datos from "./components/Datos";
import Invitación from "./components/Invitacion";
import Mailer from "./components/Miler";
import Portada from "./components/Portada";

function App() {
  return (
    <>
      <Portada/>
      <Invitación invitados={"Erick y Elena"}/>
      <Datos/>
      <Mailer invitados={"Erick y Elena"}/>
    </>
  );
}

export default App;
