import React from "react";
import * as styles from "./Footer.module.css";
import { FaInstagram, FaFacebook, FaYoutube, FaGlobe } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p> {new Date().getFullYear()} Gerenciador de Estudo</p>
      <p> &copy; Desenvolvido pelo <span style={{ color: "#007BB8", fontWeight: "bold" }}>Grupo 5</span></p>
      <p>Siga nossas redes sociais:</p>
      <div className={styles.icon}>
          <a href="https://serratec.org/" target="_blank" rel="noopener noreferrer">
            <FaGlobe />
          </a>
          <a href="https://www.instagram.com/serratecoficial/" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://pt-br.facebook.com/serratecoficial/" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
          <a href="https://www.youtube.com/@SerratecOficial" target="_blank" rel="noopener noreferrer">
            <FaYoutube />
          </a>
          </div>
    </footer>
  );
}
