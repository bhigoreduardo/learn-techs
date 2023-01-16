import { BsFillTrashFill } from "react-icons/bs";

import "./Card.css";

const ServiceCard = ({ id, nome, custo, descricao, handleOnRemove }) => {
  const removeServio = (e) => {
    e.preventDefault();
    handleOnRemove(id);
  };

  return (
    <div className="card">
      <h3>{nome}</h3>
      <p>Custo: R$ {custo}</p>
      <p>Descrição: {descricao}</p>
      <div className="button-group">
        <button onClick={removeServio}>
          <BsFillTrashFill />
        </button>
      </div>
    </div>
  );
};
export default ServiceCard;
