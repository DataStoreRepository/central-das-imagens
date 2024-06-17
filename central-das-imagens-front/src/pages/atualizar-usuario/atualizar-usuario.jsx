import { Toaster } from "sonner";
import { Input } from "../../components/input/input";
import { Button } from "../../components/button/button";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios'

export function AtualizarUsuario() {

    const navigate = useNavigate()
    const { id } = useParams()

    const [valores, setValores] = useState({
        id: id,
        name: '',
        email: '',
    })

    
    const getData = async () =>  {

        try {
            const response = await axios.get(`http://localhost:8080/usuario/${id}`);
            console.log(response.data)
            setValores({
                ...valores,
                name: response.data.name,
                email: response.data.email,
            })

        } catch (error) {
            console.log(error)
            console.log("Deu erro!")
        }
    }   

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            
            const response = await axios.put(`http://localhost:8080/usuario/${id}`, valores);
            response.status = 200
            toast.success('Atualizado com sucesso!')
            setTimeout(() => {
                navigate("/")
            }, 1000);
        } catch (error) {
            console.log(valores)
            console.log(error)
            console.log("Deu erro!")
        }
    }

    useEffect(() => {
        if (id) {
            getData();
        }
    }, [id])

    return (
        <div className="fora">
            <h1>Alterar Usuario</h1>
            <Toaster position="top-center" richColors/>
            <form onSubmit={handleSubmit}>
                <div>
                    <Input
                    type="text"
                    text="Nome do Usuário"
                    name="name"
                    placeholder="Insira o nome do Usuário"
                    value={valores.name}
                    onChangeFN={e => setValores({...valores, name: e.target.value})}
                    />
                </div>
                <div>
                    <Input
                    type="email"
                    text="E-mail do Usuário"
                    name="email"
                    placeholder="Insira o E-mail do Usuário"
                    value={valores.email}
                    onChangeFN={e => setValores({...valores, email: e.target.value})}
                    />
                </div>
                <Button type={"submit"}>Atualizar</Button>
            </form>
        </div>
    )
}