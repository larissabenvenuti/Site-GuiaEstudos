import React, { useContext, useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import * as styles from "./Disciplinas.module.css";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import * as globalStyles from "../../styles/Global.module.css";
import { UserContext } from "../../contexts/user";

export default function Disciplinas() {
  let navigate = useNavigate();
  const { token, setToken, message, setMessage } = useContext(UserContext);
  const [id, setId] = useState(0);

  const [disciplinas, setDisciplinas] = useState([]);
  const [selectEdit, setSelectEdit] = useState(false);
  const [selectDelete, setSelectDelete] = useState(false);
  const [existDisc, setExistDisc] = useState(true);
  const [add, setAdd] = useState(false);
  const [edit, setEdit] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const listarDisciplinas = () => {
    axios
      .get("https://apireact-214173757800.herokuapp.com/disciplina", {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        setDisciplinas(res.data);
      })
      .catch(console.error("Erro na requisição"));
  };

  useEffect(() => {
    if (token == "") {
      setMessage("Faça login para acessar as disciplinas");
      navigate("/login");
    } else {
      listarDisciplinas();
    }
  }, [token]);

  const addDisc = (data) => {
    axios
      .post("https://apireact-214173757800.herokuapp.com/disciplina", data, {
        headers: {
          Authorization: token,
        },
      })
      .then(() => {
        setAdd(false);
        setExistDisc(true);
        listarDisciplinas();
      })
      .catch((error) => {
        console.error("Erro na requisição", error);
      });
  };

  const apagarDisc = (id) => {
    axios
      .delete(`https://apireact-214173757800.herokuapp.com/disciplina/${id}`, {
        headers: {
          Authorization: token,
        },
      })
      .then(() => {
        setSelectDelete(false);
        listarDisciplinas();
      });
  };

  const editDisc = (data) => {
    axios
      .put(
        `https://apireact-214173757800.herokuapp.com/disciplina/${id}`,
        data,
        {
          headers: {
            Authorization: token,
          },
        }
      )
      .then(() => {
        setExistDisc(true);
        setAdd(false);
        setEdit(false);
        setSelectEdit(false);
        listarDisciplinas();
      })
      .catch(() => console.error("Erro no put"));
  };

  return (
    <div className="header-footer">
      <Header />
      <div className={globalStyles.container}>
        <div className={styles.buttonArea}>
          <button
            className={styles.dbutton}
            onClick={() => {
              setAdd(false), setEdit(false), setExistDisc(true), setSelectDelete(false), setSelectEdit(false); 
            }}
          >
            Disciplinas Existentes
          </button>
          <button
            className={styles.dbutton}
            onClick={() => {
              setAdd(true), setExistDisc(false), selectEdit(false), setSelectDelete(false), setSelectEdit(false);
            }}
          >
            Adicionar Disciplinas
          </button>
          <button
            className={styles.dbutton}
            onClick={() => {setSelectEdit(!selectEdit), setSelectDelete(false)}}
          >
            Editar Disciplina
          </button>
          <button
            className={styles.dbutton}
            onClick={() => {setSelectDelete(!selectDelete), setSelectEdit(false)}}
          >
            Apagar Disciplina
          </button>
        </div>

        {!add && edit && !existDisc && (
          <main className={styles.dmain}>
            <form className={styles.dform} onSubmit={handleSubmit(editDisc)}>
              <header className={styles.dfheader}>
                <h1>Edite a Disciplina: </h1>
              </header>
              <div className={styles.dlineTwo}></div>
              <div className={styles.dfField}>
                <label htmlFor="nome">Título da Disciplina:</label>
                <input
                  type="text"
                  name="nome"
                  id="nome"
                  maxLength="100"
                  defaultValue={disciplinas.find((d) => d.id === id).nome}
                  {...register("nome")}
                />
              </div>
              <div className={styles.dfField}>
                <label htmlFor="descricao">Descrição da Disciplina:</label>
                <input
                  type="text"
                  name="descricao"
                  id="descricao"
                  maxLength="200"
                  defaultValue={disciplinas.find((d) => d.id === id).descricao}
                  {...register("descricao")}
                />
              </div>
              <div className={styles.dfField}>
                <label htmlFor="cargaHoraria">
                  Carga horária da Disciplina:
                </label>
                <input
                  type="number"
                  name="cargaHoraria"
                  id="cargaHoraria"
                  maxLength="10"
                  defaultValue={
                    disciplinas.find((d) => d.id === id).cargaHoraria
                  }
                  {...register("cargaHoraria")}
                />
              </div>
              <button type="submit" className={styles.dbutton}>
                Editar
              </button>
            </form>
          </main>
        )}

        {add && !edit && !existDisc && (
          <main className={styles.dmain}>
            <form className={styles.dform} onSubmit={handleSubmit(addDisc)}>
              <header className={styles.dfheader}>
                <h1>Adicione uma nova Disciplina: </h1>
              </header>
              <div className={styles.dlineTwo}></div>
              <div className={styles.dfField}>
                <label htmlFor="nome">Título da Disciplina:</label>
                <input
                  type="text"
                  name="nome"
                  id="nome"
                  maxLength="100"
                  {...register("nome")}
                />
              </div>
              <div className={styles.dfField}>
                <label htmlFor="descricao">Descrição da Disciplina:</label>
                <input
                  type="text"
                  name="descricao"
                  id="descricao"
                  maxLength="200"
                  {...register("descricao")}
                />
              </div>
              <div className={styles.dfField}>
                <label htmlFor="cargaHoraria">
                  Carga horária da Disciplina:
                </label>
                <input
                  type="number"
                  name="cargaHoraria"
                  id="cargaHoraria"
                  maxLength="10"
                  {...register("cargaHoraria")}
                />
              </div>
              <button type="submit" className={styles.dbutton}>
                Adicionar
              </button>
            </form>
          </main>
        )}

        {!add && existDisc && !edit && (
          <main className={styles.dmain}>
            {disciplinas.map((d, key) => (
              <div className={styles.dcard} key={key}>
                <header className={styles.dcard__header}>
                  <h2>{d.nome}</h2>
                  {selectEdit && (
                    <button onClick={() => {setEdit(true), setAdd(false), setExistDisc(false), setId(d.id)}}></button>
                  )}
                  {selectDelete && (
                    <button onClick={() => apagarDisc(d.id)}></button>
                  )}
                </header>
                <div className={styles.dline}></div>
                <div className={styles.dcard__main}>
                  <p>{d.descricao}</p>
                </div>
                <div className={styles.dline}></div>
                <footer className={styles.dcard__footer}>
                  <h4>{d.cargaHoraria}Hr</h4>
                  <Link to={`/contador/${d.id}`}>
                    <button className={styles.dbutton}>
                      Comece a Estudar!
                    </button>
                  </Link>
                </footer>
              </div>
            ))}
          </main>
        )}
      </div>
      <Footer />
    </div>
  );
}
