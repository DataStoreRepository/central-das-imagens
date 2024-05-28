import axios from "axios"

export async function getUsuarioData(API_URL, setUsuarios) {
    try {
      const resposta = await axios.get(API_URL + "/usuario")
      setUsuarios(resposta.data)
    } catch (error) {
      alert("Erro ao processar os dados de usuario!")
    }
}