import { useEffect, useState } from 'react'
import axios from 'axios'


// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import CardPhoto from './components/card-photo/card-photo'
import Navbar from './components/navbar/navbar'
import { Loading } from './components/loading/loading'
import { Container } from './components/container/container'

function App() {

  const [fotos, setFotos] = useState([])
  const API_URL = "http://localhost:8080"


  // carregar dados do banco de dados 
  const fotoData = async() => {

    try {
      const resposta = await axios.get(API_URL + "/foto")
      setFotos(resposta.data)
    } catch (error) {
      console.log(error)
      console.log("Deu erro!")
    }

  }

  useEffect(() => {
    fotoData()
  }, [])


  return (
    <div className='app'>
      <Navbar/>
      <Container>
        {fotos.length === 0 ? <Loading/> : (
          fotos.map((foto) => (
              <CardPhoto key={foto.id} titulo={foto.titulo} descricao={foto.descricao} foto={foto.foto}/>
          ))
        )}
        
      </Container>
    </div>
   
  )
}

export default App
