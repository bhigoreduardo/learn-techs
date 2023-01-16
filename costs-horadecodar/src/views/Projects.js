import { useLocation } from "react-router-dom";

import FlexBetween from "../components/FlexBetween";
import Button from "../components/Button";

import Message from "../layout/Message";

import "./Projects.css";

const Projects = () => {
  const location = useLocation();

  let message;
  let type;
  let timer;

  if (location.state) {
    message = location.state.message;
    type = location.state.type;
    timer = location.state.timer;
  }

  return (
    <FlexBetween flexDirection="flex-column" alignItems="flex-start">
      <div className="title">
        <h1>Projetos</h1>
        <Button to="/cadastrar-projeto" content="Cadastrar projeto" />
      </div>
      {message && <Message message={message} type={type} timer={timer} />}
      <div className="card-container"></div>
    </FlexBetween>
  );
};
export default Projects;
