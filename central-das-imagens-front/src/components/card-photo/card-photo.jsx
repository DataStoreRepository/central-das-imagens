import { Link } from "react-router-dom"
import "./card-photo.css"
import { Button } from "../button/button"

import { BsPencilSquare } from "react-icons/bs";



function CardPhoto (props) {
    return (
        <div className="card">
            <img src={props.foto} alt={props.foto}/>
            <h3>{props.titulo}</h3>
            <p>{props.descricao}</p>
            <Button> <Link className="link" to={`/atualizar/${props.id}`}> <BsPencilSquare /> Editar</Link> </Button>
        </div>
       
    )
}

export default CardPhoto