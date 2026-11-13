import type { Modo } from '../types'

// Listagem secundária: os 3 modos de jogo (vetor local)
export const modos: Modo[] = [
  {
    id: 'sinopse',
    icone: 'S',
    nome: 'Sinopse',
    descricao: 'Leia a história e descubra o jogo',
  },
  {
    id: 'capa',
    icone: 'C',
    nome: 'Capa',
    descricao: 'A capa começa borrada e vai clareando',
  },
  {
    id: 'mapa',
    icone: 'M',
    nome: 'Mapa',
    descricao: 'Um pedaço do mapa. Reconhece o lugar?',
  },
]
