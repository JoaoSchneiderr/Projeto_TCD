import type { Jogo } from '../types'

type AcertoProps = {
  jogo: Jogo
  onJogarDeNovo: () => void
}

// Card que aparece quando o jogador acerta o jogo secreto
function Acerto({ jogo, onJogarDeNovo }: AcertoProps) {
  return (
    <article className="acerto">
      <h3 className="acerto-titulo">Você acertou!</h3>
      <div className="acerto-conteudo">
        <div className="acerto-capa">capa</div>
        <div>
          <p className="acerto-nome">{jogo.nome}</p>
          <p className="acerto-detalhe">
            {jogo.ano} · {jogo.plataformas}
          </p>
          <p className="acerto-detalhe">{jogo.empresa}</p>
        </div>
      </div>
      <button type="button" className="botao acerto-botao" onClick={onJogarDeNovo}>
        Jogar de novo
      </button>
    </article>
  )
}

export default Acerto
