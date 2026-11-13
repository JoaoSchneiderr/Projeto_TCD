import type { Jogo } from '../types'
import JogoCard from './JogoCard'

type GradeJogosProps = {
  jogos: Jogo[]
  chutes: Jogo[]
  jogoSecreto: Jogo
  onChutar: (jogo: Jogo) => void
}

// Listagem principal: um JogoCard para cada jogo do vetor
function GradeJogos({ jogos, chutes, jogoSecreto, onChutar }: GradeJogosProps) {
  // Descobre se o jogo já foi chutado e se era o certo
  function statusDoJogo(jogo: Jogo) {
    const foiChutado = chutes.some((chute) => chute.id === jogo.id)
    if (!foiChutado) {
      return 'normal'
    }
    if (jogo.id === jogoSecreto.id) {
      return 'certo'
    }
    return 'errado'
  }

  return (
    <>
      <h2 className="titulo-secao">Jogos · clique no card para chutar</h2>
      <ul className="jogos">
        {jogos.map((jogo) => (
          <JogoCard key={jogo.id} jogo={jogo} status={statusDoJogo(jogo)} onChutar={onChutar} />
        ))}
      </ul>
    </>
  )
}

export default GradeJogos
