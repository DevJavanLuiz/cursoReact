// export default function MapList() {
//   const nameList = ["Javan", "Luiz", "Silva", "Junior"];

//   return (
//     <>
//       <ul>
//         {nameList.map((name) => (
//           <li>{name}</li>
//         ))}
//       </ul>
//     </>
//   );
// }

export default function MapList({ itens }) {
  return (
    <>
      <h3>Lista de itens:</h3>

      {itens.length <= 0 ? (
        <p>Não há itens</p>
      ) : (
        itens.map((item, index) => <li key={index}>{item}</li>)
      )}
    </>
  );
}
