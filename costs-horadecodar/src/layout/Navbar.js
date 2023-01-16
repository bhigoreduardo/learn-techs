import { Link } from "react-router-dom";

import logo from "../images/costs-logo.png";

import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="header">
      <Link to="/" className="header--logo">
        <img src={logo} alt="Logo" />
      </Link>

      <nav className="header--navbar">
        <Link to="/">Início</Link>
        <Link to="/projetos">Projetos</Link>
      </nav>
    </header>
  );
};
export default Navbar;
