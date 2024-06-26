import "./navbar.css";
import logo from "../../assets/logo.png";
import { Button } from "../button/button";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

function Navbar() {
    const { user, logout } = useContext(AuthContext);

    return (
        <nav className="topper">
            <a href="/"><img src={logo} alt="Logo"/></a>
            <h1>Central das Imagens</h1>

            {user ? (
                <div className="button-types">
                    <Button color="#7FFFD4" onClick={logout}>Logout</Button>
                </div>
            ) : (
                <div className="button-types">
                    <Button color="#7FFFD4"><Link className="link-" to="/cadastrar-usuario">Registrar-se</Link></Button>
                    <Button color="#7FFFD4"><Link className="link-" to="/login">Login</Link></Button>
                </div>
            )}

            <div className="pesquisar">
                <input placeholder="Procurar imagem..." type="text" name="text" className="input" />
                <input type="submit" name="" id="" className="btn" />
            </div>
        </nav>
    );
}

export default Navbar;
