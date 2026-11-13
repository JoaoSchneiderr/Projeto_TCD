import type { Jogo, Modo } from '../types'

type PistaProps = {
  modo: Modo
  jogo: Jogo
  erros: number
  acertou: boolean
}

// Pista do jogo secreto: muda conforme o modo escolhido
function Pista({ modo, jogo, erros, acertou }: PistaProps) {
  // Modo Capa: a capa pixelizada começa borrada, o borrão diminui a cada erro e some quando acerta
  let borrao = 12 - erros * 2
  if (borrao < 4) {
    borrao = 4
  }
  if (acertou) {
    borrao = 0
  }

  // Modo Mapa: a imagem começa ampliada e o zoom diminui a cada erro, mostrando mais do lugar
  let zoom = 4 - erros
  if (zoom < 1) {
    zoom = 1
  }
  if (acertou) {
    zoom = 1
  }

  return (
    <>
      <h2 className="titulo-secao">Pista · modo {modo.nome}</h2>

      {modo.id === 'sinopse' && (
        <article className="pista">
          <p>"{jogo.sinopse}"</p>
          <div className="linha-escondida"></div>
          <div className="linha-escondida"></div>
          <div className="linha-escondida linha-curta"></div>
        </article>
      )}

      {modo.id === 'capa' && (
        <figure className="imagem-pista">
          <img
            className="capa-imagem"
            src={jogo.capa}
            alt="Capa do jogo secreto"
            style={{ filter: `blur(${borrao}px)` }}
          />
          <figcaption className="imagem-legenda">
            {acertou ? 'capa (agora sem blur)' : 'capa borrada'}
          </figcaption>
        </figure>
      )}

      {modo.id === 'mapa' && (
        <figure className="imagem-pista imagem-mapa">
          <img
            className="mapa-imagem"
            src={jogo.mapa}
            alt="Recorte do mapa do jogo secreto"
            style={{ transform: `scale(${zoom})` }}
          />
          <span className="selo-zoom">zoom {zoom}x</span>
        </figure>
      )}
    </>
  )
}

export default Pista
