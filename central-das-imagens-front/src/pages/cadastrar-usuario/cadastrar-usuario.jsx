import { useState } from "react";
import { Input } from "../../components/input/input";
import { Button } from "../../components/button/button";
import axios from "axios";
import { Toaster, toast } from "sonner";
import { useNavigate } from "react-router-dom";

export function CadastrarUsuario () {

    const navigate = useNavigate()

    const [valores, setValores] = useState({
        email: '',
        name: '',
        senha: ''
    })

    const API_URL = "http://localhost:8080/usuario"

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post(API_URL, valores);
            response.status = 200
            toast.success('Cadastrado com sucesso!')
            setTimeout(() => {
                navigate("/")
            }, 1000);
        } catch (error) {
            console.log(error)
            console.log("Deu erro!")
        }
    }


    return(
        <div className="fora">
            <h1>Cadastrar Usuário</h1>
            <Toaster position="top-center" richColors/>
            <form onSubmit={handleSubmit}>
            <div>
                <Input 
                    type="text"
                    text="Nome de Usuário"
                    name="usuario"
                    placeholder="Insira um usuario válido"
                    value={valores.name}
                    onChangeFN={e => setValores({...valores, name: e.target.value})}
                />
            </div>
            <div>
                <Input 
                    type="email"
                    text="E-mail"
                    name="usuario"
                    placeholder="Insira um e-mail válido"
                    value={valores.email}
                    onChangeFN={e => setValores({...valores, email: e.target.value})}
                />
            </div>
            <div>
                <Input 
                    type="password"
                    text="Senha"
                    name="usuario"
                    placeholder="Insira uma senha"
                    value={valores.senha}
                    onChangeFN={e => setValores({...valores, senha: e.target.value})}
                />
            </div>
            <Button type={"submit"}>Cadastrar usuário</Button>
            </form>
        </div>

    )
}