import { useState } from "react";
import "./card-user.css"


export function CardUser(props) {

    // const [modal, setModal] = useState(false);
    // const API_URL = "http://localhost:8080/usuario"

    return (
        <div className="principal">
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
                    <td className="gerenciar"><button class="delete-btn">Deletar</button></td>
                </tr>
            </tbody>
            </table>
        </div>
    )
}