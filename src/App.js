import "./App.css";
import HelloWorld from "./components/HelloWorld";
import ListItems from "./components/ListaDeItens";
import Person from "./components/Person";
import SayMyName from "./components/SayMyName";

function App() {
  return (
    <div className="App">
      <SayMyName name="Javan" />
      <HelloWorld />
      <Person nome=" Javan" idade={21} profissao=" Desenvolvedor web" />
    
    <ListItems/>
    </div>
  );
}

export default App;
