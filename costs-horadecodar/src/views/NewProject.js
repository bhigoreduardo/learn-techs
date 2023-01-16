import { useNavigate } from "react-router-dom";

import FlexBetween from "../components/FlexBetween";
import ProjectForm from "../components/ProjectForm";

const NewProject = () => {
  const navigate = useNavigate();

  const apiUrl = process.env.REACT_APP_API_URL;

  const saveProjeto = async (projeto) => {
    projeto.custo = 0;
    projeto.servicos = [];

    await fetch(`${apiUrl}/projetos`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(projeto),
    })
      .then((res) => res.json())
      .then((data) => {
        navigate("/projetos", {
          state: { message: `Cadastro realizado com sucesso cód. ${data.id}`, type: "success", timer: 3000 },
        });
      })
      .catch((err) => console.log(err));
  };

  return (
    <FlexBetween flexDirection="flex-column">
      <h1>Criar projeto</h1>
      <p>Crie seu projeto para depois adicionar serviços</p>
      <ProjectForm handleOnSubmit={saveProjeto} />
    </FlexBetween>
  );
};
export default NewProject;
