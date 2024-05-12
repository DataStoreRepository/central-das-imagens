import { useState } from "react";
import { Input } from "../../components/input/input";
import { Button } from "../../components/button/button";
import { useNavigate } from "react-router-dom";


import axios from 'axios'

function CadastrarFoto() {

    const navigate = useNavigate()

    const [valores, setValores] = useState({
        id: '',
        descricao: '',
        imagem: '',
        titulo: ''
    })

    const API_URL = "http://localhost:8080/foto"

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post(API_URL, valores);
            response.status = 200
            navigate("/")
        } catch (error) {
            console.log(error)
            console.log("Deu erro!")
        }
    }

    return (
        <div className="fora">
            <h1>Cadastrar foto</h1>

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
                <img className="image-update" src={valores.imagem} alt={valores.titulo}/>
            </div>
            <Button type={"submit"}>Cadastrar foto</Button>
            </form>
            
        </div>
    )
}

export default CadastrarFoto