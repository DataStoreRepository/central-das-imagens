import "./navbar.css";
import logo from "../../assets/logo.png";
import { Button } from "../button/button";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { IoIosSettings } from "react-icons/io";
import { IoLogOut } from "react-icons/io5";
import { IoMdCloseCircle } from "react-icons/io";

function Navbar() {
    const { user, logout } = useContext(AuthContext);
    const [searchTerm, setSearchTerm] = useState('');
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();

    const handleSearch = (event) => {
        event.preventDefault();
        navigate(`/search?query=${searchTerm}`);
    };

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    const handleLogout = () => {
        logout();
        setShowModal(false);
    };

    return (
        <nav className="topper">
            <div className="inicio">
            <a href="/"><img src={logo} alt="Logo" /></a>
            <h1>Central das Imagens</h1>
            </div>

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
            {user ? (
                <div className="button-types">
                    <Button color="#7FFFD4" onClick={toggleModal}><IoIosSettings /></Button>
                </div>
            ) : (
                <div className="button-types">
                    <Button color="#F6AA1C"><Link className="link-" to="/cadastrar-usuario">Registrar-se</Link></Button>
                    <Button color="#F6AA1C"><Link className="link-" to="/login">Login</Link></Button>
                </div>
            )}


            {showModal && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={toggleModal}><IoMdCloseCircle /></span>
                        {user && user.name === "admin" && (
                            <div>
                             <Button> <Link to="/imagens" className='link'>Ir para todas as fotos </Link></Button>
                             <Button> <Link to="/cadastrar-usuario" className='link'>Cadastrar Usuário</Link></Button>
                             <Button> <Link to="/usuarios" className='link'>Listar Usuários</Link></Button>
                            </div>
                        )}
                        <Button> <Link to="/cadastrar-foto" className='link'>Cadastrar Foto </Link></Button>
                        <Button color="#FF6347" onClick={handleLogout}> <IoLogOut />Logout</Button>
                    </div>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
