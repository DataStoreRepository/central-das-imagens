import "./navbar.css"

import logo from "../../assets/logo.png"

function Navbar() {
    return (
      
        <nav className="topper">
            <img src={logo} alt="Logo"/>
            <h1>Central das Imagens</h1>
            <div className="pesquisar">
                <input placeholder="Procurar imagem..." type="text" name="text" className="input" />
                <input type="submit" name="" id="" className="btn" />
            </div>
        </nav>
  
    )
}

export default Navbar