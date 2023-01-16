import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

import FlexBetween from "../components/FlexBetween";
import Button from "../components/Button";
import Card from "../components/Card";

import Message from "../layout/Message";
import Load from "../layout/Load";

import "./Projects.css";

const Projects = () => {
  const location = useLocation();

  const [projetos, setProjetos] = useState([]);
  const [isLoad, setIsLoad] = useState(true);

  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    setTimeout(() => {
      fetch(`${apiUrl}/projetos`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      })
        .then((res) => res.json())
        .then((data) => {
          setProjetos(data);
        })
        .catch((err) => console.log(err));

      setIsLoad(false);
    }, 500);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  let message;
  let type;
  let timer;

  if (location.state) {
    message = location.state.message;
    type = location.state.type;
    timer = location.state.timer;
  }

  const removeProjeto = async (id) => {
    message = "";
    type = "";
    timer = "";

    await fetch(`${apiUrl}/projetos/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then(() => {
        setProjetos(projetos.filter((projeto) => projeto.id !== id));
        message = `Projeto cód. ${id} excluído`;
        type = "success";
        timer = 3000;
      })
      .catch((err) => console.log(err));
  };

  return (
    <FlexBetween flexDirection="flex-column" alignItems="flex-start">
      <div className="title">
        <h1>Projetos</h1>
        <Button to="/cadastrar-projeto" content="Cadastrar projeto" />
      </div>
      {message && <Message message={message} type={type} timer={timer} />}
      <div className="card-container">
        {isLoad && <Load />}
        {projetos.map((projeto) => (
          <Card
            key={projeto.id}
            id={projeto.id}
            nome={projeto.nome}
            orcamento={projeto.orcamento}
            categoria={projeto.categoria.nome}
            handleOnRemove={removeProjeto}
          />
        ))}
      </div>
      {!isLoad && projetos.length === 0 && <p>Nenhum projeto cadastrado</p>}
    </FlexBetween>
  );
};
export default Projects;
