import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer--wrapper-icons">
        <a href="https://facebook.com">
          <FaFacebook />
        </a>
        <a href="https://instagram.com">
          <FaInstagram />
        </a>
        <a href="https://linkedin.com">
          <FaLinkedin />
        </a>
      </div>

      <p className="footer--credit">
        <span>Costs</span> 2023 &copy; Todos os direitos reservados
      </p>
    </footer>
  );
};
export default Footer;
