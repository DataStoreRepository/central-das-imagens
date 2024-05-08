import { Link } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar/navbar'
import { Button } from './components/button/button'

function App() {


  return (
    <div className='app'>
      <Navbar/>
      <h1>Bem Vindo</h1>
      <Button> <Link to="/imagens" className='link'>Ir para todas as fotos </Link></Button>
      <Button> <Link to="/cadastrar-foto" className='link'>Cadastrar Foto </Link></Button>
    </div>
   
  )
}

export default App
