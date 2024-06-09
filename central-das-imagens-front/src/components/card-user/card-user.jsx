import { useState } from "react";
import "./card-user.css"
import { handleDelete } from "../../api/usuario";
import { useNavigate } from "react-router-dom";
import { Toaster, toast } from 'sonner'


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
        }
        //     toast.error('Erro ao deletar!');
        // } finally {
        //     toggleModal(); // Close the modal after attempting deletion
        // }
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
                    <td className="gerenciar"><button class="edit-btn">Editar</button></td>
                    <td className="gerenciar"><button class="delete-btn" onClick={confirmDelete}>Deletar</button></td>
                </tr>
            </tbody>
            </table>
        </div>
    )
}