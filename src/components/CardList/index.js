import axios from "axios"
import { useEffect, useState } from "react"
import Card from "../Card"
import styles from "./styles.module.css"

export default function CardList(){

    const [eventos, setEventos] = useState([])
    
    useEffect(() => {
        axios.get("http://localhost:3000/eventos")
        .then(resultado => setEventos(resultado.data))
    }, [])

    return(
      <>
      <h1>Lista de eventos</h1>

      <div className={styles.cardList}>
      {eventos.map(e => (
        <Card
        titulo={e.titulo}
        dataInicio={e.dataInicio}
        dataFim={e.dataFim}/>
        ))}
       </div>
      </>
    )
  }