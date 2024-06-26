import { useEffect, useState } from 'react'

import { Container } from '../../components/container/container'
import { Loading } from '../../components/loading/loading'
import CardPhoto from '../../components/card-photo/card-photo'
import { getFotoData } from '../../api/imagens'

function Imagens() {

  const [fotos, setFotos] = useState([])
  const API_URL = "http://localhost:8080"

  useEffect(() => {
    getFotoData(API_URL, setFotos)
  }, [])

  return (
    <>
      {/* <Navbar/> */}
      <Container>
        {fotos.length === 0 ? <Loading/> : (
          fotos.map((foto) => (
              <CardPhoto key={foto.id} id={foto.id} titulo={foto.titulo} descricao={foto.descricao} foto={foto.foto}/>
          ))
        )}
        
      </Container>
    </>
   
  )
}

export default Imagens
