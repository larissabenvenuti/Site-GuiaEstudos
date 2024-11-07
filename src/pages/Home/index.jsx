import React, { useContext, useEffect } from "react";
import * as styles from "./Home.module.css";
import * as globalStyles from "../../styles/Global.module.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { UserContext } from "../../contexts/user";

export default function Home() {
  const { token, setToken, setMessage } = useContext(UserContext);

  useEffect(() => {
    setMessage("");
  }, []);
  const slidePerView = 1;

  const residencias = [
    {
      id: "1",
      image: "/metodo_pomodoro.jpg",
      caption: "Método Pomodoro",
    },
    {
      id: "2",
      image: "/mapa_mental.jpg",
      caption: "Mapa Mental",
    },
    {
      id: "3",
      image: "/leitura_ativa.jpg",
      caption: "Leitura Ativa",
    },
    {
      id: "4",
      image: "/revisao_espacada.jpg",
      caption: "Revisão Espaçada",
    },
    {
      id: "5",
      image: "/estudo_intercalado.jpg",
      caption: "Estudo Intercalado",
    },
  ];

  return (
    <div className="header-footer">
      <Header />
      <div className={globalStyles.container}>
        <main className={styles.content}>
          <section className={styles.home}>
            <div className={styles.shape}></div>
            <div className={styles.textsHome}>
              <h1 className={styles.title}>Guia de Estudos</h1>
            </div>
            <img
              src="/homem_pc.png"
              alt="Pessoas no computador"
              className={styles.bannerPic}
            />
          </section>

          <section className={styles.intro}>
            <h1 className={styles.titleOne}>Introdução</h1>
            <h3 className={styles.subtitle}>
              Bem-vindo ao Guia de Estudos para a Residência em TIC/Software do
              Serratec!
            </h3>
            <p className={styles.paragraph}>
              Este espaço foi criado especialmente para apoiar você, residente,
              em sua jornada de aprendizado e desenvolvimento. Aqui, você
              encontrará orientações práticas para entender melhor as
              disciplinas do programa e maximizar seu rendimento, além de dicas
              valiosas sobre como organizar seu tempo de estudo de forma eficaz.
              Nosso objetivo é ajudar você a tirar o melhor proveito do curso,
              com métodos que facilitam a assimilação de conteúdo e técnicas
              para aprimorar a gestão do seu tempo. Aproveite nossas ferramentas
              e sugestões para planejar cada etapa, equilibrar o estudo com
              outras atividades e alcançar um aprendizado consistente e focado.
              Estamos aqui para caminhar com você rumo ao sucesso!
            </p>
          </section>

          <section className={styles.slideSection}>
            <h1 className={styles.titleTwo}>Métodos de Estudo</h1>
            <div className={styles.swiperContainer}>
              <Swiper
                modules={[Navigation]}
                slidesPerView={slidePerView}
                pagination={{ clickable: true }}
                navigation
              >
                {residencias.map((item) => (
                  <SwiperSlide key={item.id} className={styles.slideContainer}>
                    <img
                      src={item.image}
                      alt="Slider"
                      className={styles.slideItem}
                    />
                    <div className={styles.caption}>{item.caption}</div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </section>

          <section className={styles.advantages}>
            <h1 className={styles.titleThree}>
              Vantagens de estudar de forma organizada
            </h1>
            <div className={styles.paragraph}>
              <h3 className={styles.goal}>
                1. Gestão do Tempo e Produtividade:
              </h3>
              <h4 className={styles.description}>
                Com uma rotina organizada, você consegue distribuir melhor seu
                tempo entre as diversas disciplinas, evitando sobrecarga e
                aumentando a produtividade. Assim, você poderá se dedicar
                plenamente a cada tema, sem deixar acumular conteúdos
                importantes.
              </h4>
              <h3 className={styles.goal}>
                2. Maior Retenção e Compreensão de Conteúdos:
              </h3>
              <h4 className={styles.description}>
                Planejar revisões e estudos intercalados permite que você
                assimile o conhecimento de forma contínua e profunda, fixando o
                conteúdo a longo prazo. Com a prática de metodologias eficazes,
                como o método Pomodoro e a revisão espaçada, você retém o
                aprendizado de forma mais sólida.
              </h4>
              <h3 className={styles.goal}>
                3. Redução de Ansiedade e Estresse:
              </h3>
              <h4 className={styles.description}>
                A organização proporciona uma visão clara do que precisa ser
                feito, reduzindo a ansiedade diante de prazos e tarefas
                acumuladas. Com um plano de estudos, você alcança suas metas de
                maneira mais tranquila, focando no aprendizado sem pressão
                desnecessária.
              </h4>
              <h5 className={styles.finalDescription}>
                Nosso portal está aqui para fornecer ferramentas, técnicas de
                estudo e dicas de gestão de tempo, ajudando você a desenvolver
                uma rotina produtiva e bem organizada para alcançar o sucesso no
                curso.
              </h5>
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </div>
  );
}
