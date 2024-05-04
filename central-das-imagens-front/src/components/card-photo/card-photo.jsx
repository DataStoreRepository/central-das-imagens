import "./card-photo.css"

function CardPhoto (props) {
    return (
        <div className="card">
            <img src={props.foto} alt={props.foto}/>
            <h3>{props.titulo}</h3>
            <p>{props.descricao}</p>
        </div>
    )
}

export default CardPhoto