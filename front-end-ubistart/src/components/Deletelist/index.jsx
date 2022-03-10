import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';
import Styles from "./edit.module.scss";

export default function DeleteList({closeDelete, id, title}){
  const handleDelete = ()=>{
    axios.delete(`http://localhost:8080/deletedo/${id}`).then(response=>{
      alert("Deletado com sucesso");
    })
  }
  return(
    <div className={Styles.container}>
      <div className={Styles.wrapper}>
        <h3>Tem certeza que deseja deletar:</h3>
        <h2>{title}</h2>
        <div className={Styles.actionArea}>
          <button>Cancelar</button>
          <button onClick={handleDelete}>Deletar</button>
        </div>
        <div className={Styles.closeButton}>
          <CloseIcon onClick={closeDelete}/>
        </div>
      </div>
    </div>
  )
}