import { useState } from "react";
import { Input } from "../../components/input/input";
import { Button } from "../../components/button/button";
import { useNavigate } from "react-router-dom";
import { Toaster, toast } from 'sonner'


import axios from 'axios'

function CadastrarFoto() {

    const navigate = useNavigate()

    //teste
    const usuario = {
        name : "Milena",
        email : "milena@gmail.com",
        senha : "123"
    }

    const [valores, setValores] = useState({
        id: '',
        descricao: '',
        imagem: '',
        titulo: '',
        usuario
    })

    const API_URL = "http://localhost:8080/foto"

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

    return (
        <div className="fora-cad">
            <div className="blur">
            <h1>Cadastrar nova foto</h1>
            <Toaster position="top-center" richColors/>

            <form onSubmit={handleSubmit}>
            <div>
                <Input 
                    type="text" 
                    text="Título da foto" 
                    name="name" 
                    placeholder="Insira título da foto..." 
                    value={valores.titulo}
                    onChangeFN={e => setValores({...valores, titulo: e.target.value})}
                />
            </div>
            <div>
                <Input 
                    type="text" 
                    text="Descrição da foto" 
                    name="name" 
                    placeholder="Insira a descricao foto..." 
                    value={valores.descricao}
                    onChangeFN={e => setValores({...valores, descricao: e.target.value})}
                />
            </div>
            <div>
                <Input 
                    type="text" 
                    text="Imagem" 
                    name="name" 
                    placeholder="Insira URL da foto" 
                    value={valores.imagem}
                    onChangeFN={e => setValores({...valores, imagem: e.target.value})}
                />
                {valores.imagem && <img className="image-update" src={valores.imagem} alt={valores.titulo}/>}
            </div>
            <Button className="btn-cad" color="#63D471" size="100%" type={"submit"}>Cadastrar foto</Button>
            </form>
            
            </div>
        </div>
    )
}

export default CadastrarFoto