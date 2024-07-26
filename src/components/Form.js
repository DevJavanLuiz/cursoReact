import { useState } from "react";

export default function Form() {
  function cadastrado(e) {
    e.preventDefault();
    console.log(name);
    console.log(password);
    console.log("Usuario cadastrado");
  }

  const [name, setName] = useState();
  const [password, setPassword] = useState()
  return (
    <>
      <h1>Faça seu cadastro</h1>
      <form onSubmit={cadastrado}>
        <div>
          <label htmlFor="name">Nome: </label>
          <input
            type="text"
            id="name"
            placeholder="Seu nome"
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="password">Senha: </label>
          <input
            type="password"
            id="password"
            placeholder="Digite sua senha"
            onChange={(e)=> setPassword(e.target.value)}
 ></input>
        </div>
        <div>
          <input type="submit" value="cadastrar"></input>
        </div>
      </form>
    </>
  );
}
