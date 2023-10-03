import axios from "axios"
import { useEffect, useState } from "react"
import Card from "../Card"
import styles from "./styles.module.css"

export default function CardList(){

    const [eventos, setEventos] = useState([])
    
    useEffect(() => {
        axios.get('http://localhost:3000/eventos')
        .then(resultado => setEventos(resultado.data))
    }, [])

    function formatarData(data){
      const[ano, mes, dia] = data.split('-');
      return `${dia}/${mes}/${ano}`
    }

    return(
      <>
      <h1>Lista de eventos</h1>

      <div className={styles.cardList}>
      {eventos.map(e => (
        <Card
          id={e.id}
          titulo={e.titulo}
          dataInicio={formatarData(e.dataInicio)}
          dataFim={formatarData(e.dataFim)}/>
        ))}
       </div>
      </>
    )
  }