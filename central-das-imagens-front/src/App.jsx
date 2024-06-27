import { Link } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar/navbar'
import { Button } from './components/button/button'
import Imagens from './pages/imagens/imagens'

function App() {


  return (
    <div className='app'>
      <Navbar/>
      <Imagens/>
    </div>
   
  )
}

export default App
