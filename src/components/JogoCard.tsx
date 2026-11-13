import type { Jogo } from '../types'

type JogoCardProps = {
  jogo: Jogo
  status: 'normal' | 'errado' | 'certo'
  onChutar: (jogo: Jogo) => void
}

// Card de um jogo da grade: clicar no card faz o chute
function JogoCard({ jogo, status, onChutar }: JogoCardProps) {
  // A classe muda conforme o status: vermelho se errou, verde se acertou
  let classe = 'jogo-card'
  if (status === 'errado') {
    classe = 'jogo-card jogo-card-errado'
  }
  if (status === 'certo') {
    classe = 'jogo-card jogo-card-certo'
  }

  return (
    <li>
      <button type="button" className={classe} onClick={() => onChutar(jogo)}>
        <span className="jogo-nome">{jogo.nome}</span>
        <span className="jogo-genero">{jogo.genero}</span>
        <span className="jogo-nota">
          nota {jogo.nota} · {jogo.classificacao}
        </span>
      </button>
    </li>
  )
}

export default JogoCard
