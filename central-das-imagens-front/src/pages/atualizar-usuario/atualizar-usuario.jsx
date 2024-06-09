import { Toaster } from "sonner";
import { Input } from "../../components/input/input";

export function AtualizarUsuario() {




    return (
        <div className="fora">
            <h1>Alterar Usuario</h1>
            <Toaster position="top-center" richColors/>
            <form onSubmit={}>
                <div>
                    <Input
                    type="text"
                    text="Nome do Usuário"
                    name="name"
                    placeholder="Insira o nome do Usuário"
                    value={}
                    onChangeFN={}
                    />
                </div>
                <div>
                    <Input
                    type="email"
                    text="E-mail do Usuário"
                    name="email"
                    placeholder="Insira o E-mail do Usuário"
                    value={}
                    onChangeFN={}
                    />
                </div>
            </form>
        </div>
    )
}