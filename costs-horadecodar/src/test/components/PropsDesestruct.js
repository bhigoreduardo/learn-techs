function PropsDesestruct({ url, alt, nome, idade, profissao }) {
  return (
    <div>
      <h2>Props Desestruct</h2>
      <img src={url} alt={alt} />
      <p>Nome: {nome}</p>
      <p>Idade: {idade}</p>
      <p>Profissão: {profissao}</p>
    </div>
  );
}

export default PropsDesestruct;
