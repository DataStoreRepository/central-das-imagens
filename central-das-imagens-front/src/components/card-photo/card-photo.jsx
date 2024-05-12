import { Link } from "react-router-dom"
import "./card-photo.css"
import { Button } from "../button/button"

function CardPhoto (props) {
    return (
        <div className="card">
            <img src={props.foto} alt={props.foto}/>
            <h3>{props.titulo}</h3>
            <p>{props.descricao}</p>
            <Button> <Link to={`/atualizar/${props.id}`}>Editar</Link> </Button>
        </div>
       
    )
}

export default CardPhoto