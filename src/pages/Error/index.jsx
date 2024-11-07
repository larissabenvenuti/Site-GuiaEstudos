import React from "react";
import { Link } from "react-router-dom";
import errorIcon from "/src/assets/error-icon.svg";
import styles from "./Error.module.css";

export default function Error() {
  return (
    <div className={styles.error}>
      <div className={styles.errorContent}>
        <img src={errorIcon} alt="Erro" className={styles.errorIcon} />
        <h1 className={styles.title}> Oops! </h1>
        <p className={styles.message}> Erro 404 - Página não encontrada </p>
        <p className={styles.message}>
          {" "}
          Desculpe, mas a página que você está procurando não existe ou não está
          disponível no momento...reclama com professor Roni.{" "}
        </p>
        <Link to="/" className={styles.errorButton}>
          {" "}
          Voltar para a Home{" "}
        </Link>
      </div>
    </div>
  );
}
