import "./navbar.css"

import logo from "../../assets/logo.png"
import { Button } from "../button/button"
import { Link } from "react-router-dom"

function Navbar() {
    return (
      
        <nav className="topper">
            <a href="/"><img src={logo} alt="Logo"/></a>
            <h1>Central das Imagens</h1>


            <div className="pesquisar">
            <Button color="#7FFFD4"> <Link className="link-" to={"/cadastrar-usuario"}>Registrar-se</Link></Button>
            <Button color="#7FFFD4"> <Link className="link-" to={"/login-usuario"}>Login</Link> </Button>
                <input placeholder="Procurar imagem..." type="text" name="text" className="input" />
                <input type="submit" name="" id="" className="btn" />
            </div>
        </nav>
  
    )
}

export default Navbar