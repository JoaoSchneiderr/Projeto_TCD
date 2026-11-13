import type { Jogo } from '../types'

// Listagem principal: os 10 jogos da grade
// (na fase 4 estes dados vão para um arquivo JSON carregado com fetch)
export const jogos: Jogo[] = [
  {
    id: 1,
    nome: 'Minecraft',
    genero: 'Sandbox',
    nota: 93,
    classificacao: 'L',
    ano: 2011,
    plataformas: 'PC',
    empresa: 'Mojang',
    sinopse:
      'Um mundo feito de blocos onde você coleta recursos, constrói o que quiser e sobrevive às noites cheias de monstros...',
    comentario: 'Perdi 500 horas construindo uma casa e ainda não terminei.',
  },
  {
    id: 2,
    nome: 'Skyrim',
    genero: 'RPG',
    nota: 94,
    classificacao: '18+',
    ano: 2011,
    plataformas: 'PC, PS3, Xbox 360',
    empresa: 'Bethesda',
    sinopse:
      'Um prisioneiro escapa da execução quando um dragão ataca a vila e descobre que tem o poder de absorver a alma dessas criaturas...',
    comentario: 'Eu era um aventureiro como você, até levar uma flechada no joelho.',
  },
  {
    id: 3,
    nome: 'Hollow Knight',
    genero: 'Metroidvania',
    nota: 87,
    classificacao: '10+',
    ano: 2017,
    plataformas: 'PC, Switch',
    empresa: 'Team Cherry',
    sinopse:
      'Um pequeno cavaleiro silencioso explora as ruínas de um reino de insetos esquecido debaixo da terra...',
    comentario: 'Difícil, lindo e com uma trilha sonora que não sai da cabeça.',
  },
  {
    id: 4,
    nome: 'Elden Ring',
    genero: 'Soulslike',
    nota: 96,
    classificacao: '16+',
    ano: 2022,
    plataformas: 'PC, PS5, Xbox Series',
    empresa: 'FromSoftware',
    sinopse:
      'Um maculado é chamado de volta às Terras Intermédias para reunir os fragmentos de um anel quebrado e se tornar lorde...',
    comentario: 'Morri 40 vezes para o mesmo chefe e voltaria para morrer mais.',
  },
  {
    id: 5,
    nome: 'Sonic',
    genero: 'Plataforma',
    nota: 86,
    classificacao: 'L',
    ano: 1991,
    plataformas: 'Mega Drive',
    empresa: 'Sega',
    sinopse:
      'Um ouriço azul muito rápido corre por fases cheias de anéis para salvar os animais de um cientista malvado...',
    comentario: 'A fase da água me dá ansiedade até hoje.',
  },
  {
    id: 6,
    nome: 'The Witcher 3',
    genero: 'RPG',
    nota: 93,
    classificacao: '18+',
    ano: 2015,
    plataformas: 'PC, PS4, Xbox One',
    empresa: 'CD Projekt Red',
    sinopse:
      'Um caçador de monstros de cabelos brancos atravessa reinos em guerra procurando a jovem que criou como filha...',
    comentario: 'Fui fazer uma missão secundária e passei a semana jogando cartas.',
  },
  {
    id: 7,
    nome: 'GTA V',
    genero: 'Ação',
    nota: 97,
    classificacao: '18+',
    ano: 2013,
    plataformas: 'PS3, Xbox 360',
    empresa: 'Rockstar Games',
    sinopse:
      'Três criminosos muito diferentes planejam golpes em uma cidade ensolarada inspirada em Los Angeles...',
    comentario: 'Comprei em três gerações de console e compraria de novo.',
  },
  {
    id: 8,
    nome: 'Stardew Valley',
    genero: 'Simulação',
    nota: 89,
    classificacao: 'L',
    ano: 2016,
    plataformas: 'PC',
    empresa: 'ConcernedApe',
    sinopse:
      'Cansado do trabalho no escritório, você herda a antiga fazenda do avô e recomeça a vida em uma vila pequena...',
    comentario: 'Só mais um dia na fazenda... e já são 3 da manhã.',
  },
  {
    id: 9,
    nome: 'Celeste',
    genero: 'Plataforma',
    nota: 92,
    classificacao: '10+',
    ano: 2018,
    plataformas: 'PC, Switch, PS4, Xbox One',
    empresa: 'Maddy Makes Games',
    sinopse:
      'Uma jovem decide escalar uma montanha misteriosa enquanto enfrenta a própria ansiedade pelo caminho...',
    comentario: 'Cada morango custou umas 100 mortes. Valeu cada uma.',
  },
  {
    id: 10,
    nome: 'Hades',
    genero: 'Roguelike',
    nota: 93,
    classificacao: '16+',
    ano: 2020,
    plataformas: 'PC, Switch',
    empresa: 'Supergiant Games',
    sinopse:
      'O filho do deus dos mortos tenta fugir do submundo, morrendo e voltando a cada tentativa...',
    comentario: 'Morrer nunca foi tão divertido.',
  },
]

// Sorteia um jogo da lista para ser o jogo secreto da rodada
export function sortearJogo(lista: Jogo[]): Jogo {
  const posicao = Math.floor(Math.random() * lista.length)
  return lista[posicao]
}
