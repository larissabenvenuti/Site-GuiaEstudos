import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import styles from "./Login.module.css";
import * as globalStyles from "../../styles/Global.module.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/user";

const Login = () => {
  const { token, setToken, message, setMessage } = useContext(UserContext);
  let navigate = useNavigate();

  useEffect(() => {
    if (message != "") {
      setError(message);
    }
  }, []);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordC, setPasswordC] = useState("");
  const [error, setError] = useState("");
  const [cadastro, setCadastro] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    axios
      .post(`https://apireact-214173757800.herokuapp.com/login`, {
        email: email,
        password: password,
      })
      .then((response) => {
        setToken(response.headers["authorization"]);
        navigate("/disciplinas");
        setError("");
      })
      .catch((err) => {
        if (err.response && err.response.status === 401) {
          setError("Usuário ou senha inválidos");
        } else {
          console.log({ email, password });
          setError("Ocorreu um erro ao conectar-se ao servidor");
        }
      });
  };

  const handleRegister = (e) => {
    e.preventDefault();

    axios
      .post("https://apireact-214173757800.herokuapp.com/user", {
        email,
        senha: password,
        confirmaSenha: passwordC,
      })
      .then(() => {
        setEmail("");
        setPassword("");
        setPasswordC("");
        setError("Usuário cadastrado com sucesso!");
        setCadastro(false);
      })
      .catch((err) => {
        if (err.response.status === 422) {
          setError(err.response.data);
          console.log(err.response.data);
        } else {
          setError("Ocorreu um erro ao conectar-se ao servidor");
        }
      });
  };

  return (
    <div className="header-footer">
      <Header />
      <div className={globalStyles.container}>
        <div className={styles.loginContainer}>
          <h2>Login</h2>
          <form
            onSubmit={!cadastro ? handleLogin : handleRegister}
            className={styles.form}
          >
            <div className={styles.inputGroup}>
              <label className={styles.label}>Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className={styles.input}
              />
            </div>
            <div className={styles.inputGroup}>
              <label className={styles.label}>Senha:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className={styles.input}
              />
            </div>
            {!cadastro ? (
              ""
            ) : (
              <div className={styles.inputGroup}>
                <label className={styles.label}>Confirmar senha:</label>
                <input
                  type="password"
                  value={passwordC}
                  onChange={(e) => setPasswordC(e.target.value)}
                  required
                  className={styles.input}
                />
              </div>
            )}
            <button type="submit" className={styles.submitButton}>
              {cadastro ? "Cadastrar" : "Entrar"}
            </button>
          </form>
          {error && <p className={styles.message}>{error}</p>}
          <button
            onClick={() => {
              setCadastro(!cadastro);
              setError("");
            }}
            className={styles.toggleButton}
          >
            {cadastro ? "Fazer login" : "Não tem uma conta? Cadastre-se"}
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
