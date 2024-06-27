import { Container } from "../../components/container/container";
import { Input } from "../../components/input/input";
import {Button } from "../../components/button/button"
import "./login.css"
import { useContext, useState } from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import { Toaster, toast } from 'sonner'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from "../../context/AuthContext";

export function Login () {

    const { login } = useContext(AuthContext);

    // const [erro, setErro] = useState({})
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        if (!valores.email || !valores.senha) {
            alert("Por favor, preencha todos os campos.");
            return;
        }
    
        try {
            const response = await axios.post('http://localhost:8080/usuario/login', valores);
            if (response.status === 200) {
                login(response.data);
                toast.success('Bem-vindo!');
                setTimeout(() => {
                    navigate("/");
                }, 1000);
            }
        } catch (error) {
            alert("E-mail ou senha incorretos!");
        }
    }
    

    const [valores, setValores] = useState({
        email: '',
        senha: ''
    })

    return (
        <>
            <Toaster position="top-center"/>
            <div className="div-main">
            <h1>Login</h1>
                
                <form onSubmit={handleLogin}>
                <div className="div-login">
                <Input 
                        type="email" 
                        text="E-mail" 
                        name="email" 
                        placeholder="E-mail" 
                        value={valores.email}
                        onChangeFN={e => setValores({...valores, email: e.target.value})}
                />
                </div>
                <div className="div-login">
                   <Input 
                        type="password" 
                        text="Senha" 
                        name="senha" 
                        placeholder="Senha" 
                        value={valores.senha}
                        onChangeFN={e => setValores({...valores, senha: e.target.value})}
                    />
                </div>
                <Button color="blue" type={"submit"}>Login</Button>
                </form>
            </div>
        </>
    )
}