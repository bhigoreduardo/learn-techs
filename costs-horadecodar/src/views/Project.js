import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import FlexBetween from "../components/FlexBetween";
import ProjectForm from "../components/ProjectForm";
import Card from "../components/ServiceCard";
import ServiceForm from "../components/ServiceForm";

import Message from "../layout/Message";

import "./Projects.css";

const Project = () => {
  const { id } = useParams();
  const [isEdit, setIsEdit] = useState(false);
  const [isServico, setIsServico] = useState(false);
  const [projeto, setProjeto] = useState({});
  const [message, setMessage] = useState("");
  const [type, setType] = useState("");
  const [timer, setTimer] = useState("");

  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    fetch(`${apiUrl}/projetos/${id}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => setProjeto(data))
      .catch((err) => console.log(err));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const updateProjeto = async (projeto) => {
    setMessage("");

    const projetoOrcamento = parseFloat(projeto.orcamento);
    const projetoCusto = parseFloat(projeto.custo);

    if (projetoOrcamento < projetoCusto) {
      setMessage("Orçamento está menor que os custos do projeto");
      setType("fail");
      setTimer(3000);

      setIsEdit(false);
      return;
    }

    await fetch(`${apiUrl}/projetos/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(projeto),
    })
      .then((res) => res.json())
      .then((data) => {
        setProjeto(data);
        setMessage("Projeto atualizado com sucesso!");
        setType("success");
        setTimer(3000);
        setIsEdit(false);
      })
      .catch((err) => console.log(err));
  };

  const removeServico = async (servicoId) => {
    setMessage("");

    const projetoCusto = parseFloat(projeto.custo);
    const servicoIndex = projeto.servicos.findIndex((servico) => servico.id === servicoId);
    const servico = projeto.servicos[servicoIndex];
    const servicoCusto = servico.custo;

    projeto.servicos = projeto.servicos.filter((servico) => servico.id !== servicoId);
    projeto.custo = projetoCusto - servicoCusto;

    await fetch(`${apiUrl}/projetos/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(projeto),
    })
      .then((res) => res.json())
      .then((data) => {
        setProjeto(data);
        setMessage("Serviço excluído com sucesso");
        setType("success");
        setTimer(3000);
      })
      .catch((err) => console.log(err));
  };

  const saveServico = async (servico) => {
    setMessage("");

    const projetoOrcamento = parseFloat(projeto.orcamento);
    const projetoCusto = parseFloat(projeto.custo);
    const servicoCusto = parseFloat(servico.custo);

    if (servicoCusto > projetoOrcamento - projetoCusto) {
      setMessage("Custo do serviço supera o orçamento disponível");
      setType("fail");
      setTimer(3000);
      return;
    }

    servico.id = uuidv4();
    projeto.servicos.push(servico);
    projeto.custo = projetoCusto + servicoCusto;
    setProjeto(projeto);

    fetch(`${apiUrl}/projetos/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(projeto),
    })
      .then((res) => res.json())
      .then((data) => {
        setProjeto(data);
        setIsServico(false);
        setMessage("Serviço cadastrado com sucesso!");
        setType("success");
        setTimer(300);
      })
      .catch((err) => console.log(err));
  };

  return (
    <FlexBetween flexDirection="flex-column" alignItems="flex-start">
      {message && <Message message={message} type={type} timer={timer} />}
      <div className="title">
        <h1>Projeto: {projeto.nome}</h1>
        <button className="button" onClick={() => setIsEdit(!isEdit)}>
          {!isEdit ? "Editar Projeto" : "Fechar Edição"}
        </button>
      </div>

      {!isEdit ? (
        <div className="information">
          <p>
            <span>Categoria:</span> {projeto.categoria?.nome}
          </p>
          <p>
            <span>Orçamento:</span> R$ {projeto.orcamento}
          </p>
          <p>
            <span>Custo:</span> R$ {projeto.custo}
          </p>
        </div>
      ) : (
        <div className="information">
          <ProjectForm dadosProjeto={projeto} handleOnSubmit={updateProjeto} buttonValue="Atualizar Projeto" />
        </div>
      )}

      <div className="title">
        <h1>Serviços</h1>
        <button className="button" onClick={() => setIsServico(!isServico)}>
          {!isServico ? "Cadastrar Serviço" : "Fechar Cadastro"}
        </button>
      </div>

      {!isServico ? (
        projeto.servicos?.length > 0 ? (
          <div className="card-container">
            {projeto.servicos.map((servico) => (
              <Card
                key={servico.id}
                id={servico.id}
                nome={servico.nome}
                custo={servico.custo}
                descricao={servico.descricao}
                handleOnRemove={removeServico}
              />
            ))}
          </div>
        ) : (
          <p>Nenhum serviço cadastrado</p>
        )
      ) : (
        <ServiceForm handleOnSubmit={saveServico} buttonValue="Cadastrar Serviço" />
      )}
    </FlexBetween>
  );
};
export default Project;
