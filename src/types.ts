// Formato de cada jogo da listagem principal (grade de jogos)
export type Jogo = {
  id: number
  nome: string
  genero: string
  nota: number
  classificacao: string
  ano: number
  plataformas: string
  empresa: string
  sinopse: string
  comentario: string
  capa: string
  mapa: string
}

// Formato de cada modo de jogo da listagem secundária
export type Modo = {
  id: string
  icone: string
  nome: string
  descricao: string
}
