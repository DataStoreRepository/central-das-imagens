import { Link } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar/navbar'
import { Button } from './components/button/button'
import Imagens from './pages/imagens/imagens'

function App() {


  return (
    <div className='app'>
      <Navbar/>
      {/* <h1>Bem Vindo</h1> */}
      <Button> <Link to="/imagens" className='link'>Ir para todas as fotos </Link></Button>
      <Button> <Link to="/cadastrar-foto" className='link'>Cadastrar Foto </Link></Button>
      <Button> <Link to="/cadastrar-usuario" className='link'>Cadastrar Usuário</Link></Button>
      <Button> <Link to="/usuarios" className='link'>Listar Usuários</Link></Button>
      <Imagens/>
    </div>
   
  )
}

export default App
