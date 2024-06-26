import "./navbar.css";
import logo from "../../assets/logo.png";
import { Button } from "../button/button";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";

function Navbar() {
    const { user, logout } = useContext(AuthContext);
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const handleSearch = (event) => {
        event.preventDefault();
        // Redireciona para a página de resultados de pesquisa com o termo de pesquisa
        navigate(`/search?query=${searchTerm}`);
    };

    return (
        <nav className="topper">
            <a href="/"><img src={logo} alt="Logo" /></a>
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

            <form className="pesquisar" onSubmit={handleSearch}>
                <input
                    placeholder="Procurar imagem..."
                    type="text"
                    name="text"
                    className="input"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <input type="submit" value="Procurar" className="btn" />
            </form>
        </nav>
    );
}

export default Navbar;
