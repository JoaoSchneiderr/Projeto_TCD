import type { Modo } from '../types'

type ModoCardProps = {
  modo: Modo
  onEscolher: (id: string) => void
}

// Card de um modo de jogo: o card inteiro é um botão que abre o modo
function ModoCard({ modo, onEscolher }: ModoCardProps) {
  return (
    <li>
      <button type="button" className="modo-card" onClick={() => onEscolher(modo.id)}>
        <span className="modo-icone">{modo.icone}</span>
        <span className="modo-texto">
          <span className="modo-nome">Modo: {modo.nome}</span>
          <span className="modo-descricao">{modo.descricao}</span>
        </span>
        <span className="botao modo-botao">Jogar</span>
      </button>
    </li>
  )
}

export default ModoCard
