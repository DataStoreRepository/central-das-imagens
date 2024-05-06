import { Link } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar/navbar'

function App() {


  return (
    <div className='app'>
      <Navbar/>
      <h1>Bem Vindo</h1>
      <button><Link to="/imagens" className='link'> Ir para todas as fotos </Link></button>
      <button><Link to="/cadastrar-foto"  className='link'> Cadastrar foto </Link></button>
    </div>
   
  )
}

export default App
