import { Input } from "../../components/input/input";

export function CadastrarUsuario () {
    return(
        <div>
            <h1>Cadastrar Usuário</h1>
            <div>
                <Input 
                    type="text"
                    text="Nome de Usuário"
                    name="usuario"
                    placeholder="Insira um usuario válido"
                />
            </div>
            <div>

            </div>
        </div>

    )
}