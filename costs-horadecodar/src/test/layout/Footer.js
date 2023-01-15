import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <ul className={styles.footer__icons}>
        <li>
          <a href="https://facebook.com">
            <FaFacebook />
          </a>
        </li>
        <li>
          <a href="https://instagram.com">
            <FaInstagram />
          </a>
        </li>
        <li>
          <a href="https://linkedin.com">
            <FaLinkedin />
          </a>
        </li>
      </ul>

      <p className={styles.footer__credit}>Todos os direitos reservados &copy; 2023</p>
    </footer>
  );
}

export default Footer;
