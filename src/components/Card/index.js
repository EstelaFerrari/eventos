import styles from "./styles.module.css"

export default function Card({titulo, dataInicio, dataFim}){
    return(
      <div className={styles.card}>
        <h2 className={styles.cardTitulo}>{ titulo }</h2>
        <div> Data de Inicio: { dataInicio }</div>
        <div> Data de Fim: { dataFim }</div>
      
      </div>
    )
  }