import { Input } from "../../components/input/input";

function CadastrarFoto() {
    return (
        <div className="fora">
            <div>
                <Input type="text" text="Título da foto" name="name" placeholder="Insira título da foto..." />
            </div>
            <div>
                <Input type="text" text="Descrição da foto" name="name" placeholder="Insira a descricao foto..." />
            </div>
            <div>
                <Input type="text" text="Imagem" name="name" placeholder="Insira URL da foto" />
            </div>
        </div>
    )
}

export default CadastrarFoto