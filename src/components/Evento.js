import Button from "./eventos/Button.js";

export default function Evento() {
  function meuEvento(){
    console.log("primeiro ativado!!!")
  }
  function segundoEvento(){
    console.log("segundo ativado!!!")
  }
  
    return (
    <>
    <p>Clique para ativar um evento</p>
    <Button event={meuEvento} text="Primeiro Evento"/>
    <Button event={segundoEvento} text="Segundo Evento"/>
    </>
  );
}
