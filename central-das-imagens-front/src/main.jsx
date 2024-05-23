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
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
