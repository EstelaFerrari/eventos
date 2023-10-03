import axios from "axios"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

export default function EventosHome(){

    const [evento, setEventos] = useState({})
    const router = useRouter()


    //Verifica se algum evento disparou o comando
    useEffect(() =>{

        const id = router.query.id

        if(id){
            axios.get(`http://localhost:3000/eventos/${id}`)
            .then(resultado => setEventos(resultado.data))
        }

        },[router])

    return(
        <>
            <h1>Detalhe do Eventos</h1>
            <h2>{evento.titulo}</h2>
            <h2>{evento.descricao}</h2>

        </>
    )
}

//tudo que é entre chaves{} é objeto