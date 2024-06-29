import { useState } from "react";
import "./card-user.css"
import { handleDelete } from "../../api/usuario";
import { Link, useNavigate } from "react-router-dom";
import { Toaster, toast } from 'sonner'
import { Button } from "../button/button";


export function CardUser(props) {

    
    const navigate = useNavigate()
    const API_URL = "http://localhost:8080/usuario"

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
    

    return (
        <div className="principal">
            <Toaster position="top-center" expand/>
            <table>
            {props.index == 0 && <thead>
                <tr>
                    <th>Usuario</th>
                    <th>E-mail</th>
                    <th className="gerenciar">Editar</th>
                    <th className="gerenciar">Deletar</th>
                </tr>
            </thead>}
            <tbody>
                <tr>
                    <td>{props.name}</td>
                    <td>{props.email}</td>
                    <td className="gerenciar"><Button color="#2274A5"> <Link  className="link-" to={`/usuarios/atualizar/${props.id}`}>Editar</Link> </Button></td>
                    <td className="gerenciar"><Button color="#E83F6F" onClick={confirmDelete}>Deletar</Button></td>
                </tr>
            </tbody>
            </table>
        </div>
    )
}