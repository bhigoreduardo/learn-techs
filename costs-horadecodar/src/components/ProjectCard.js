import { Link } from "react-router-dom";
import { BsPencil, BsFillTrashFill } from "react-icons/bs";

import "./Card.css";

const Card = ({ id, nome, orcamento, categoria, handleOnRemove }) => {
  const removeProjeto = (e) => {
    e.preventDefault();
    handleOnRemove(id);
  };

  return (
    <div className="card">
      <h4>{nome}</h4>
      <p>Orçamento: R$ {orcamento}</p>
      <p className="category">
        <span className={`${categoria.toLowerCase()}`}></span>
        {categoria}
      </p>
      <div className="button-group">
        <Link to={`/projetos/${id}`}>
          <BsPencil />
        </Link>
        <button>
          <BsFillTrashFill onClick={removeProjeto} />
        </button>
      </div>
    </div>
  );
};
export default Card;
