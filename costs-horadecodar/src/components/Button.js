import { Link } from "react-router-dom";

import "./Button.css";

const Button = ({ to, content }) => {
  return (
    <Link className="button" to={to}>
      {content}
    </Link>
  );
};
export default Button;
