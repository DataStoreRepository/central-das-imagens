import axios from "axios"

export async function getFotoData(API_URL, setFotos) {
    try {
      const resposta = await axios.get(API_URL + "/foto")
      setFotos(resposta.data)
    } catch (error) {
      alert("Erro ao processar os dados de fotos!")
    }
}