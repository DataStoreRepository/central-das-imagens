import "./card-photo.css"
import { Link } from "react-router-dom"
import { Button } from "../button/button"

import { BsPencilSquare } from "react-icons/bs";
import { FaTrash } from "react-icons/fa6";
import { IoIosCloseCircle } from "react-icons/io";

import { useNavigate } from "react-router-dom";


import { useState } from "react";

import { Toaster, toast } from 'sonner'

import axios from "axios"



function CardPhoto (props) {

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

    const handleDelete = async () => {
        try {
            
            const response = await axios.delete(`${API_URL}/${props.id}`) 
            response.status = 200
            toast.success('Deletado com sucesso!')
            
            setTimeout(() => {
                navigate("/")
            }, 1000);
        } catch (error) {
            console.log(error)
            console.log("Deu erro!")
        }
    }

    return (
        <div className="card">
            <Toaster position="top-center" expand/>
            <img src={props.foto} alt={props.foto}/>
            <h3>{props.titulo}</h3>
            <p>{props.descricao}</p>
            <div className="botoes">
                <Button> <Link className="link" to={`/atualizar/${props.id}`}> <BsPencilSquare /> Editar</Link> </Button>
                <Button onClick={toggleModal}> <FaTrash /> Deletar</Button>
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
                <Button onClick={handleDelete}>Sim, tenho certeza!</Button>
            </div>
            </div>
            )}
        </div>
       
    )
}

export default CardPhoto