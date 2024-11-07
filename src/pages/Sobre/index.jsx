import React, { useContext, useEffect } from "react";
import * as styles from "./Sobre.module.css";
import * as globalStyles from "../../styles/Global.module.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { UserContext } from "../../contexts/user";

export default function Sobre() {
  const { token, setToken, setMessage } = useContext(UserContext);

  useEffect(() => {
    setMessage("");
  }, []);

  return (
    <div className="header-footer">
      <Header />
      <div className={globalStyles.container}>
        <h1 className={styles.title}>
          Guia de Estudos: Como Aproveitar Melhor seu Tempo e Aprender de Forma
          Eficaz
        </h1>
        <p className={styles.paragraphOne}>
          Estudar de forma eficiente vai muito além de apenas ler e revisar
          materiais. É preciso ter uma estratégia e conhecer as metodologias que
          melhor se adaptam ao seu estilo de aprendizado. Abaixo, você
          encontrará algumas abordagens e técnicas para otimizar seu estudo,
          além de links para sites e artigos com mais informações sobre
          metodologias de aprendizado.
        </p>

        <h2 className={styles.subtitle}>1. Método Pomodoro</h2>
        <p className={styles.paragraph}>
          O método Pomodoro é uma técnica simples e poderosa de gestão de tempo.
          Ela consiste em dividir o tempo de estudo em blocos de 25 minutos de
          foco total, seguidos de uma pausa de 5 minutos. Após quatro
          "pomodoros", você faz uma pausa mais longa. Esse método ajuda a manter
          a concentração e evita o cansaço mental.
        </p>

        <h2 className={styles.subtitle}>2. Mapas Mentais</h2>
        <p className={styles.paragraph}>
          Criar mapas mentais é uma forma visual de organizar informações,
          facilitando a compreensão e a memorização. Eles conectam ideias e
          conceitos, o que pode ser especialmente útil ao revisar disciplinas
          que envolvem muita teoria. Para montar um mapa mental, você pode usar
          papel e caneta ou plataformas como o MindMeister.
        </p>

        <h2 className={styles.subtitle}>3. Leitura Ativa</h2>
        <p className={styles.paragraph}>
          A leitura ativa envolve interagir com o conteúdo, fazendo anotações,
          destacando pontos importantes e resumindo o que foi lido. Essa
          abordagem permite uma compreensão mais profunda do tema e ajuda a
          manter a atenção.
        </p>

        <h2 className={styles.subtitle}>4. Estudo Intercalado</h2>
        <p className={styles.paragraph}>
          Em vez de estudar uma disciplina por horas seguidas, alterne entre
          diferentes assuntos. O estudo intercalado ajuda a evitar a fadiga
          mental e facilita a retenção, pois seu cérebro se mantém engajado com
          novos conteúdos.
        </p>
        <h2 className={styles.subtitle}>5. Revisão Espaçada</h2>
        <p className={styles.paragraph}>
          A revisão espaçada consiste em revisar o conteúdo em intervalos
          crescentes ao longo do tempo, reforçando a memorização e diminuindo a
          chance de esquecimento. Existem aplicativos como Anki que ajudam a
          aplicar essa técnica automaticamente.
        </p>
        <h2 className={styles.subtitle}>
          Sites com Conteúdo sobre Técnicas e Metodologias de Estudo
        </h2>
        <p className={styles.paragraph}>
          Para se aprofundar em metodologias de estudo e encontrar mais dicas,
          confira os seguintes sites:
        </p>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <a
              href="https://ufpi.br/arquivos_download/arquivos/Parnaiba/2021/Guia_de_Estudos_UFDPar_-_SEPE-PRAEC.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Universidade Federal do Piauí - Guia de Técnicas de Estudo
            </a>
          </li>
          <li className={styles.listItem}>
            <a
              href="https://guiadoestudante.abril.com.br/estudo/como-fazer-um-mapa-mental/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Guia do Estudante - Como fazer um mapa mental
            </a>
          </li>
          <li className={styles.listItem}>
            <a
              href="https://querobolsa.com.br/revista/organizacao-de-estudos"
              target="_blank"
              rel="noopener noreferrer"
            >
              Revista Quero - Organização de estudos
            </a>
          </li>
          <li className={styles.listItem}>
            <a
              href="https://fepi.br/gestao-de-tempo-dicas-para-otimizar-seus-estudos/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Centro Universitário de Itajubá - Gestão de tempo para otimizar os
              estudos
            </a>
          </li>
        </ul>
      </div>
      <Footer />
    </div>
  );
}
