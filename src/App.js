import './App.css';
import HelloWorld from './components/HelloWorld';

function App() {
const name= "Javan"

  return (
    <div className="App">
 <h1>Olá React!</h1>
 <p>Meu primeiro {name}</p> 
 <HelloWorld />
    </div>
  );
}

export default App;
