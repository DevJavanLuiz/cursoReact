// import "./App.css";
// // import Condicional from "./components/Condicional";
// // import MapList from "./components/MapList";
// // import SeuNome from "./components/SeuNome";
// // import { useState } from "react";
// // import Saudacao from "./Saudacao";
// // import Divisoria from "./components/Divisoria";

// // *********************************************************

// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import Home from "./pages/Home";
// import Empresa from "./pages/Empresa";
// import Contato from "./pages/Contato";

// function App() {
//   // const [name, setName] = useState();

//   // const alimentos = ["Pêra", "Banana", "Maçã"];
//   return (
//     // <div className="App">
//     //   <Divisoria />
//     //   <h1>Renderização Condicional</h1>
//     //   <Condicional />

//     //   <ul>
//     //     <MapList itens={alimentos} />
//     //   </ul>

//     //   <Divisoria />

//     //   <h1>Uso do State Lift</h1>
//     //   <SeuNome setName={setName} />
//     //   <Saudacao nomeUser={name} />

//     //   <Divisoria />
//     // </div>

// export default App;

import "./App.css";
import Footer from "./components/layout/Footer";
import NavBar from "./components/layout/NavBar";
import Contato from "./pages/Contato";
import Empresa from "./pages/Empresa";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/empresa" element={<Empresa />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}
export default App;
