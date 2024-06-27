import { useState } from "react";
import { Input } from "../../components/input/input";
import { Button } from "../../components/button/button";
import axios from "axios";
import { Toaster, toast } from "sonner";
import { useNavigate } from "react-router-dom";
import "./cadastrar-usuario.css";

export function CadastrarUsuario() {
    const navigate = useNavigate();

    const [valores, setValores] = useState({
        email: '',
        name: '',
        senha: ''
    });

    const [errors, setErrors] = useState({});

    const API_URL = "http://localhost:8080/usuario";

    const validate = () => {
        let tempErrors = {};
        tempErrors.name = valores.name ? "" : "Nome de usuário é obrigatório.";
        tempErrors.email = valores.email ? "" : "E-mail é obrigatório.";
        tempErrors.senha = valores.senha ? "" : "Senha é obrigatória.";
        
        setErrors(tempErrors);
        return Object.values(tempErrors).every(x => x === "");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validate()) {
            try {
                // Verificar se o email ou nome de usuário já existem
                const checkResponse = await axios.get(`${API_URL}/check`, { params: { email: valores.email, name: valores.name } });
                if (checkResponse.data.exists) {
                    toast.error('Email ou nome de usuário já existem!');
                } else {
                    const response = await axios.post(API_URL, valores);
                    if (response.status === 200) {
                        toast.success('Cadastrado com sucesso!');
                        setTimeout(() => {
                            navigate("/");
                        }, 1000);
                    }
                }
            } catch (error) {
                console.log(error);
                toast.error('Erro ao cadastrar!');
            }
        }
    };

    return (
        <div className="fora-cad">
            <div className="blur">
                <h1>Cadastre-se!</h1>
                <Toaster position="top-center" richColors />
                <form onSubmit={handleSubmit}>
                    <div>
                        <Input
                            type="text"
                            text="Nome de Usuário"
                            name="usuario"
                            placeholder="Insira um usuário válido"
                            value={valores.name}
                            onChangeFN={e => setValores({ ...valores, name: e.target.value })}
                        />
                        {errors.name && <span className="error">{errors.name}</span>}
                    </div>
                    <div>
                        <Input
                            type="email"
                            text="E-mail"
                            name="email"
                            placeholder="Insira um e-mail válido"
                            value={valores.email}
                            onChangeFN={e => setValores({ ...valores, email: e.target.value })}
                        />
                        {errors.email && <span className="error">{errors.email}</span>}
                    </div>
                    <div>
                        <Input
                            type="password"
                            text="Senha"
                            name="senha"
                            placeholder="Insira uma senha"
                            value={valores.senha}
                            onChangeFN={e => setValores({ ...valores, senha: e.target.value })}
                        />
                        {errors.senha && <span className="error">{errors.senha}</span>}
                    </div>
                    <Button className="btn-cad" color="#63D471" size="100%" type={"submit"}>Cadastrar usuário</Button>
                </form>
            </div>
        </div>
    );
}

export default CadastrarUsuario;
