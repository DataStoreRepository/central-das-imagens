import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";


import axios from 'axios'
import "./atualizar-foto.css"

import { Input } from "../../components/input/input";
import { Button } from "../../components/button/button";

export function AtualizarFoto() {

    const navigate = useNavigate()
    const { id } = useParams()

    const [valores, setValores] = useState({
        id: id,
        descricao: '',
        imagem: '',
        titulo: ''
    })


    const getData = async () =>  {

        try {
            const response = await axios.get(`http://localhost:8080/foto/${id}`);
            console.log(response.data)
            setValores({
                ...valores,
                descricao: response.data.descricao,
                imagem: response.data.foto,
                titulo: response.data.titulo
            })

        } catch (error) {
            console.log(error)
            console.log("Deu erro!")
        }
    }    

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.put(`http://localhost:8080/foto/${id}`, valores);
            response.status = 200
            navigate("/")
        } catch (error) {
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
            <h1>Alterar foto</h1>
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

            <Button type={"submit"}>Atualizar foto</Button>
            </form>
        </div>
    )

}
