import { Link } from "react-router-dom";

import styles from "./Navbar.module.css";

function NavBar() {
  return (
    <header className={styles.header}>
      <nav className={styles.header__navbar}>
        <ul>
          <li>
            <Link to="/test">Home</Link>
          </li>
          <li>
            <Link to="/test/contato">Contato</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
