import Items from "./Items";

export default function ListItems() {
  return (
    <>
      <h1>Lista de itens</h1>
      <ul>
        <Items marca="Fiat" anoLancado={1992} />
        <Items marca="Chevrolet" anoLancado={1990} />
        <Items marca={12} anoLancado={1989} />
        <Items  />
      </ul>
    </>
  );
}

