import { useState } from "react";

import Input from "./Input";
import Submit from "./Submit";

import "./Form.css";

const ServicoForm = ({ handleOnSubmit, buttonValue }) => {
  const [servico, setServico] = useState({});

  const handleInputServico = (e) => {
    setServico({ ...servico, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleOnSubmit(servico);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <Input
        id="nome"
        type="text"
        name="nome"
        placeholder="Insira o nome do serviço"
        handleOnChange={handleInputServico}
        label="Nome"
      />
      <Input
        id="custo"
        type="number"
        name="custo"
        placeholder="Insira o custo do serviço"
        handleOnChange={handleInputServico}
        label="Custo"
      />
      <Input
        id="descricao"
        type="text"
        name="descricao"
        placeholder="Insira o descrição do serviço"
        handleOnChange={handleInputServico}
        label="Descrição"
      />
      <Submit value={buttonValue} />
    </form>
  );
};
export default ServicoForm;
