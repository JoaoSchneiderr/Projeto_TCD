import type { Jogo } from '../types'

// Endereço do JSON com os 10 jogos da listagem principal (arquivo em public/jogos.json)
const URL_JOGOS = '/jogos.json'

// Busca os jogos no JSON com fetch e devolve o vetor já convertido
// Se o servidor responder com erro (ex.: 404), lança um erro para o App tratar
export async function buscarJogos(): Promise<Jogo[]> {
  const resposta = await fetch(URL_JOGOS)
  if (!resposta.ok) {
    throw new Error('Erro ao buscar os jogos: ' + resposta.status)
  }
  const dados: Jogo[] = await resposta.json()
  return dados
}

// Sorteia um jogo da lista para ser o jogo secreto da rodada
export function sortearJogo(lista: Jogo[]): Jogo {
  const posicao = Math.floor(Math.random() * lista.length)
  return lista[posicao]
}
