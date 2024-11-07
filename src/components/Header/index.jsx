import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import * as styles from "./Header.module.css";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = (path) => {
    if (location.pathname !== path) {
    }
  };

  return (
    <header className={styles.header}>
      <div>
        <div className={styles.menuIcon} onClick={toggleMenu}>
          ☰
        </div>
        <nav className={`${styles.nav} ${isMenuOpen ? styles.active : ""}`}>
          <Link to="/" onClick={() => closeMenu("/")}>Home</Link>
          <p></p>
          <Link to="/login" onClick={() => closeMenu("/login")}>Login</Link>
          <p></p>
          <Link to="/disciplinas" onClick={() => closeMenu("/disciplinas")}>Disciplinas</Link>
          <p></p>
          <Link to="/contador" onClick={() => closeMenu("/contador")}>Contador</Link>
          <p></p>
          <Link to="/sobre" onClick={() => closeMenu("/sobre")}>Sobre</Link>
        </nav>
      </div>
    </header>
  );
}
