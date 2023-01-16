import { useState, useEffect } from "react";

import Input from "./Input";
import Select from "./Select";
import Submit from "./Submit";

import "./Form.css";

const ProjectForm = ({ dadosProjeto, handleOnSubmit }) => {
  const [projeto, setProjeto] = useState(dadosProjeto || {});
  const [categorias, setCategorias] = useState([]);

  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    fetch(`${apiUrl}/categorias`, {
      method: "GET",
      header: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => setCategorias(data))
      .catch((err) => console.log(err));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleInputProjeto = (e) => {
    setProjeto({ ...projeto, [e.target.name]: e.target.value });
  };

  const handleSelectProjeto = (e) => {
    setProjeto({ ...projeto, categoria: { id: e.target.value, nome: e.target.options[e.target.selectedIndex].text } });
  };

  const submitForm = (e) => {
    e.preventDefault();
    handleOnSubmit(projeto);
  };

  return (
    <form className="form" onSubmit={submitForm}>
      <Input
        id="nome"
        type="text"
        name="nome"
        placeholder="Informe o nome do projeto"
        value={projeto.nome ? projeto.nome : ""}
        handleOnChange={handleInputProjeto}
        label="Nome"
      />
      <Input
        id="orcamento"
        type="number"
        name="orcamento"
        placeholder="Informe o orçamento do projeto"
        value={projeto.orcamento ? projeto.orcamento : ""}
        handleOnChange={handleInputProjeto}
        label="Orçamento"
      />
      <Select
        id="categoria"
        name="categoria"
        label="Categoria"
        disabledText="Selecione uma categoria"
        handleOnChange={handleSelectProjeto}
        options={categorias}
      />
      <Submit value="Cadastrar projeto" />
    </form>
  );
};
export default ProjectForm;
