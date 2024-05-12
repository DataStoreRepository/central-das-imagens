import { useState } from "react";
import { Input } from "../../components/input/input";

function CadastrarFoto() {

    const [titulo, setTitulo] = useState("")
    const [descricao, setDescricao] = useState("")
    const [imagem, setImagem] = useState("")

    // const refreshPage = () => {
	// 	document.location.reload();
	// };

    const API_URL = "http://localhost:8080/foto/"

    const editarFoto = () => {
		axios.post(API_URL + id, {
			id: editValues.id,
			name: editValues.name,
			category: editValues.category,
			cost: editValues.cost,
		});

	// 	handleClose();
	// 	refreshPage();
	};

    // const handleClose = () => {
	// 	props.setOpen!(false);
	// };


    return (
        <div className="fora">
            <h1>Alterar foto</h1>
            <div>
                <Input 
                    type="text" 
                    text="Título da foto" 
                    name="name" 
                    placeholder="Insira título da foto..." 
                    value={titulo}
                    onChangeFN={setTitulo}
                />
            </div>
            <div>
                <Input 
                    type="text" 
                    text="Descrição da foto" 
                    name="name" 
                    placeholder="Insira a descricao foto..." 
                    value={descricao}
                    onChangeFN={setDescricao}
                />
            </div>
            <div>
                <Input 
                    type="text" 
                    text="Imagem" 
                    name="name" 
                    placeholder="Insira URL da foto" 
                    value={imagem}
                    onChangeFN={setImagem}
                />
            </div>
        </div>
    )
}

export default CadastrarFoto