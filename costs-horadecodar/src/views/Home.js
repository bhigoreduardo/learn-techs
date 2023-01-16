import FlexBetween from "../components/FlexBetween";
import Button from "../components/Button";

import savings from "../images/savings.svg";

import "./Home.css";

const Home = () => {
  return (
    <FlexBetween flexDirection="flex-column">
      <h1>
        Bem-vindo ao <span>Costs</span>
      </h1>
      <p>Comece a gerenciar seu projetos agora mesmo</p>
      <Button to="/cadastrar-projeto" content="Cadastrar projeto" />
      <img src={savings} alt="projetos" />
    </FlexBetween>
  );
};
export default Home;
