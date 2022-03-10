import {Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./styles.scss";
import axios from "axios";
import ItemList from "../../components/ItemList";
import CreateDo from "../../components/CreateDo";


export default function Deashboard(){
  const [listTarefas, setListTarefas] = useState([]);
  useEffect(()=>{
    setInterval(() => {
      axios.get("http://localhost:8080/listdo").then(async response =>{
        const list = await response.data;
        setListTarefas(list);
      })
    }, 2000);
  },[])
  const [ openCreateDo, setOpenCreateDo] = useState(false);
  return(
    <div className="container">
      <header>
        <div className="cabecalho">
          <img src="assets/programer.jfif" alt="user-photo" />
          <h1>Nome do usuário</h1>
        </div>
        <nav>
          <ul>
            <li>
              <Link to={"/deashboard"}>
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link to={"/"}>
                <a>Sobre</a>
              </Link>
            </li>
            <li>
              <Link>
                <a>configurações</a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <div className="list">
        <div className="cabecalho">
          <h1>Sua lista de tarefas</h1>
          <button onClick={()=>setOpenCreateDo(!openCreateDo)}>
            <p>+</p>
            <span>add tarefa</span>
          </button>
        </div>
        <div className="wrapper">
          {listTarefas.map((item) => (
            <ItemList
              key={item.id}
              id={item.id}
              title={item.title}
              created_at={item.created_at}
              deadline={item.deadline}
            />
          ))}
        </div>
      </div>
      {openCreateDo ? <CreateDo closeCreate={()=>setOpenCreateDo(false)}/> : ""}
    </div>
  )
}