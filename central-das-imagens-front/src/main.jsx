import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import App from './App.jsx'

import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import CadastrarFoto from './pages/cadastrar-foto/cadastrar-foto.jsx'
import Imagens from './pages/imagens/imagens.jsx'
import {AtualizarFoto} from './pages/atualizar-foto/atualizar-foto.jsx'
import { ErroPage } from './pages/erro/erro-page.jsx'
import { CadastrarUsuario } from './pages/cadastrar-usuario/cadastrar-usuario'
import { Usuarios } from './pages/usuarios/usuarios'
import { AtualizarUsuario } from './pages/atualizar-usuario/atualizar-usuario'
import { Login } from './pages/login/login.jsx'
import { AuthProvider } from './context/AuthContext.jsx'
import SearchResults from './pages/resultados-pesquisa/resultados.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErroPage/>,
  },
  {
    path: "/cadastrar-foto",
    element: <CadastrarFoto/>
  },
  {
    path: "/imagens",
    element: <Imagens/>
  },
  {
    path: "/atualizar/:id",
    element: <AtualizarFoto/>,
  },
  {
    path: "/cadastrar-usuario",
    element: <CadastrarUsuario/>,
  },  
  {
    path: "/usuarios",
    element: <Usuarios/>,
  }, 
  {
    path: "/usuarios/atualizar/:id",
    element: <AtualizarUsuario/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/search",
    element: <SearchResults/>,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
)
