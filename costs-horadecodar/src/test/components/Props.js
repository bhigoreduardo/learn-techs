function Props(props) {
  return (
    <div>
      <h2>Props</h2>
      <img src={props.url} alt={props.alt} />
      <p>Nome: {props.nome}</p>
      <p>Idade: {props.idade}</p>
      <p>Profissão: {props.profissao}</p>
    </div>
  );
}

export default Props;
