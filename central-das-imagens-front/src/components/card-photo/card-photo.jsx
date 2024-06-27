import "./card-photo.css"
import { Link } from "react-router-dom"
import { Button } from "../button/button"

import { BsPencilSquare } from "react-icons/bs";
import { FaTrash } from "react-icons/fa6";
import { FaDownload } from "react-icons/fa";
import { IoIosCloseCircle } from "react-icons/io";

import { useNavigate } from "react-router-dom";


import { useContext, useState } from "react";

import { Toaster, toast } from 'sonner'


import { handleDelete } from "../../api/usuario";
import { AuthContext } from "../../context/AuthContext";



function CardPhoto (props) {
    const { user } = useContext(AuthContext);

    const navigate = useNavigate()

    const [modal, setModal] = useState(false);
    const API_URL = "http://localhost:8080/foto"

    const toggleModal = () => {
      setModal(!modal);
    };
  
    if(modal) {
      document.body.classList.add('active-modal')
    } else {
      document.body.classList.remove('active-modal')
    }

    const confirmDelete = async () => {
        try {
            await handleDelete(API_URL, props.id);
            toast.success('Deletado com sucesso!');
            setTimeout(() => {
                navigate("/");
            }, 1000);
        } catch (error) {
            console.log(error);
            toast.error('Erro ao deletar!');
        } finally {
            toggleModal(); // Close the modal after attempting deletion
        }
    };

    function handleDownload() {
        // Crie um link temporário para o download
        const link = document.createElement('a');
        link.href = props.foto;
        link.download = props.imagem; // Nome do arquivo para download
        link.click();
    }
    
    return (
        <div className="card">
            <Toaster position="top-center" expand/>
            <img src={props.foto} alt={props.foto}/>
            <h3>{props.titulo}</h3>
            <p>{props.descricao}</p>
            <div className="botoes-container">
                <Button color="#69FFF1" size="100%" onClick={handleDownload}><FaDownload/> <a download="filename" href={props.imagem}>Baixar</a></Button>
                {user && user.name === "admin" && (
                    <div className="botoes">
                        <Button color="#99C24D"> <Link className="link-" to={`/atualizar/${props.id}`}> <BsPencilSquare /> Editar</Link> </Button>
                        <Button color="#A40606" onClick={toggleModal}> <FaTrash /> Deletar</Button>
                    </div>
                )}
            </div>
            {modal && (
            <div className="modal">
            <div onClick={toggleModal} className="overlay"></div>
            <div className="modal-content">

                <h3> Tem certeza que deseja deletar?</h3>
                <p>
                    Depois de deletado será impossível voltar!
                </p>
                <button className="close-modal" onClick={toggleModal}>
                    <IoIosCloseCircle size={20} />
                </button>
                <Button onClick={confirmDelete}>Sim, tenho certeza!</Button>
            </div>
            </div>
            )}
        </div>
       
    )
}

export default CardPhoto