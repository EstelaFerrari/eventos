import Link from "next/link"
import styles from "./styles.module.css"

export default function Card({id, titulo, dataInicio, dataFim}){
    return(
      <div className={styles.card}>
        <Link href={`/eventos/${id}`}>
          <h2 className={styles.cardTitulo}>{ titulo }</h2>
          <div> Data de Inicio: { dataInicio }</div>
          <div> Data de Fim: { dataFim }</div>
        </Link>
      </div>
    )
  }