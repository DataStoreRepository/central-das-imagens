import { Link } from "react-router-dom";
import { Button } from "../../components/button/button";
import "./erro-page.css"

import ErroImage from "../../assets/erro.gif"

export function ErroPage() {
    return (
        <div className="erro">
            <h1>Ops!! URL não encontrada! 😓 </h1>
            <Button> <Link to={"/"} className="link"> Voltar para a página inicial </Link> </Button>
            <img className="image-erro" src={ErroImage} alt="image-erro" />
        </div>
    )
}