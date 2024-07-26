import { useState } from "react";
export default function Condicional() {
  const [email, setEmail] = useState();
  const [userEmail, setUserEmail] = useState();

  function enviarEmail(e) {
    e.preventDefault();
    setUserEmail(email);
    console.log(typeof email);
  }
  function limparEmail() {
    setUserEmail("");
  }
  return (
    <div>
      <h2>Cadastre seu e-mail: </h2>
      <form>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Digite seu e-mail"
        ></input>
        <button onClick={enviarEmail}>Enviar-email</button>
      </form>
      {userEmail && (
        <div>
          <p> E-mail cadastrado é: {userEmail}</p>
          <button onClick={limparEmail}>Limpar Email</button>
        </div>
      )}
    </div>
  );
}
