import axios from "axios"
import { Toaster, toast } from 'sonner'
// import { useNavigate } from "react-router-dom";

export async function getUsuarioData(API_URL, setUsuarios) {
    try {
      const resposta = await axios.get(API_URL + "/usuario")
      setUsuarios(resposta.data)
    } catch (error) {
      alert("Erro ao processar os dados de usuario!")
    }
}

// const navigate = useNavigate()

export const handleDelete = async (API_URL, id) => {
  try {
      const response = await axios.delete(`${API_URL}/${id}`) 
      response.status = 200
  } catch (error) {
      console.log(error)
      console.log("Deu erro!")
  }
}


export const handleSubmit = async (e, API_URL, valores) => {
  e.preventDefault()
  try {
      const response = await axios.put(`${API_URL}`, valores);
      response.status = 200
  } catch (error) {
      console.log("Deu erro!")
  }
}