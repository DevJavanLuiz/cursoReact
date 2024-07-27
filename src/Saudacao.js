export default function Saudacao({ nomeUser }) {
  function gerarSaudacao(algumNome) {
    return `Olá ${algumNome}, tudo bem?`;
  }
  return <>{nomeUser && <p>{gerarSaudacao(nomeUser)}</p>}</>;
}
