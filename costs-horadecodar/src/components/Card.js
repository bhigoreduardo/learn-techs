import { Link } from "react-router-dom";
import { BsPencil, BsFillTrashFill } from "react-icons/bs";

import "./Card.css";

const Card = ({ id, nome, orcamento, categoria }) => {
  return (
    <div className="card">
      <h4>{nome}</h4>
      <p>Orçamento: {orcamento}</p>
      <p>
        <span className={`category ${categoria.toLoweCase()}`}></span>
        {categoria}
      </p>
      <div>
        <Link to={`/projetos/${id}`}>
          <BsPencil />
        </Link>
        <BsFillTrashFill />
      </div>
    </div>
  );
};
export default Card;
