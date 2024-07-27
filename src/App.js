import "./App.css";
import Condicional from "./components/Condicional";
import MapList from "./components/MapList";
import SeuNome from "./components/SeuNome";
import { useState } from "react";
import Saudacao from "./Saudacao";
import Divisoria from "./components/Divisoria";

function App() {
  const [name, setName] = useState();

  const alimentos = ["Pêra", "Banana", "Maçã"];
  return (
    <div className="App">
      <Divisoria />
      <h1>Renderização Condicional</h1>
      <Condicional />

      <ul>
        <MapList itens={alimentos} />
      </ul>

      <Divisoria />

      <h1>Uso do State Lift</h1>
      <SeuNome setName={setName} />
      <Saudacao nomeUser={name} />

      <Divisoria />
    </div>
  );
}

export default App;
