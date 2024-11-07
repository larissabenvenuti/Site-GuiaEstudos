import React, { useState, useEffect, useContext } from "react";
import * as styles from "./Contador.module.css";
import * as globalStyles from "../../styles/Global.module.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useParams } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../../contexts/user";


export default function Contador() {

  const { token, setToken, setMessage } = useContext(UserContext);

  const { id } = useParams();
  const [disciplina, setDisciplina] = useState({});


  const [time, setTime] = useState(25 * 60);
  const [isActive, setIsActive] = useState(false);
  const [mode, setMode] = useState("Pomodoro");

  useEffect(() => {
    if (id !== null) {
      axios
        .get(`https://apireact-214173757800.herokuapp.com/disciplina/${id}`, {
          headers: {
            Authorization: token,
          }
          })
        .then((res) => {setDisciplina(res.data)})
        .catch((error) => console.error("Erro ao buscar a disciplina:", error))
    } else {
      setDisciplina(null);
    }
    setMessage("");
  }, []);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2,"0")}`;
  };

  const startPomodoro = () => {
    setTime(25 * 60);
    setMode("Pomodoro");
    setIsActive(false);
  };

  const startLongBreak = () => {
    setTime(10 * 60);
    setMode("Long Break");
    setIsActive(false);
  };

  const startShortBreak = () => {
    setTime(5 * 60);
    setMode("Short Break");
    setIsActive(false);
  };

  const startTimer = () => {
    setIsActive(true);
  };

  const stopTimer = () => {
    setIsActive(false);
  };

  const resetTimer = () => {
    setIsActive(false);
    if (mode === "Pomodoro") setTime(25 * 60);
    else if (mode === "Long Break") setTime(10 * 60);
    else setTime(5 * 60);
  };

  useEffect(() => {
    let interval = null;
    if (isActive && time > 0) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (time === 0) {
      clearInterval(interval);
      new Audio("/alert.mp3").play();
    }
    return () => clearInterval(interval);
  }, [isActive, time]);

  return (
    <div className="header-footer">
      <Header />
      <div className={globalStyles.container}>
        <h1 className={styles.title}>Pomodoro Timer</h1>
        <h3 className={styles.subtitle}>Você conhece o método Pomodoro?</h3>
        <p className={styles.paragraph}>
          O método Pomodoro é uma técnica de gerenciamento de tempo que ajuda a
          melhorar a concentração e a produtividade nos estudos. Ele envolve
          dividir o tempo em blocos de trabalho focado{" "}
          <i>(geralmente de 25 minutos)</i>, intercalados com pausas curtas,
          para evitar a fadiga e manter o foco por mais tempo.
        </p>
        <h2 className={styles.timer}>{formatTime(time)}</h2>
        <div className={styles.allButtonsContainer}>
          <div className={styles.buttonGroup}>
            <button onClick={startPomodoro} className={styles.button}>
              Pomodoro
            </button>
            <button onClick={startLongBreak} className={styles.button}>
              Long Break
            </button>
            <button onClick={startShortBreak} className={styles.button}>
              Short Break
            </button>
          </div>
          <div className={styles.buttonGroup}>
            <button onClick={startTimer} className={styles.start}>
              Start
            </button>
            <button onClick={stopTimer} className={styles.stop}>
              Stop
            </button>
            <button onClick={resetTimer} className={styles.reset}>
              Reset
            </button>
          </div>
        </div>
        {id && (
          <div>
            <p></p>
            <h1 className={styles.title}>{disciplina.nome}</h1>
            <h3 className={styles.subtitle}>Carga Horária: {disciplina.cargaHoraria}hr</h3>
            <p className={styles.paragraph}>{disciplina.descricao}</p>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
