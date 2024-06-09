import { useEffect, useState } from 'react'

import Navbar from '../../components/navbar/navbar'
import { Loading } from '../../components/loading/loading'
import { getUsuarioData } from '../../api/usuario'
import { CardUser } from '../../components/card-user/card-user'


export function Usuarios() {

    const [usuario, setUsuario] = useState([])
    const API_URL = "http://localhost:8080"

    useEffect(() => {
        getUsuarioData(API_URL, setUsuario)
    }, [])


    return (
        <>
        <Navbar/>
        <table>
       
        <tbody>
        {usuario.length === 0 ? <Loading/> : (
        usuario.map((user,index) => (
            <CardUser index={index} key={user.id} id={user.id} name={user.name} email={user.email}/>
        ))
        )}
        </tbody>
        </table>
      </>
    )
}