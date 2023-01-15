import Hello from "./Hello";

function Interpolacao() {
  const name = "Higor";
  const upperName = name.toUpperCase();
  const url = "https://via.placeholder.com/150";

  const sum = (x, y) => x + y;

  return (
    <div>
      <h1>Interpolação de dados</h1>
      <Hello />
      <p>Nome: {name}</p>
      <p>UpperName: {upperName}</p>
      <p>Sum: {sum(2, 1)}</p>
      <img src={url} alt="Placeholder" />
    </div>
  );
}

export default Interpolacao;
