import Interpolacao from "../components/Interpolacao";
import Props from "../components/Props";
import PropsDesestruct from "../components/PropsDesestruct";
import PropsType from "../components/PropsType";
import Events from "../components/Events";
import EventEmitter from "../components/EventEmitter";
import Conditional from "../components/Conditional";
import Loop from "../components/Loop";
import StateLift from "../components/StateLift";

function Home() {
  const items = ["Angular", "Vuejs", "Reactjs"];

  return (
    <div className="test__container test__wrapper">
      <Interpolacao />
      <Props
        url="https://via.placeholder.com/150"
        alt="Placeholder"
        nome="Higor"
        idade={25}
        profissao="Programador Back-End"
      />
      <PropsDesestruct
        url="https://via.placeholder.com/150"
        alt="Placeholder"
        nome="Higor"
        idade={25}
        profissao="Programador Back-End"
      />
      <PropsType marca="Ferrari" lancamento={1975} />
      <Events />
      <EventEmitter />
      <Conditional />
      <Loop items={items} />
      <StateLift />
    </div>
  );
}

export default Home;
