import type { Jogo } from '../types'

type DicasProps = {
  jogo: Jogo
  liberadas: boolean
  reveladas: string[]
  onRevelar: (rotulo: string) => void
}

// Dicas do jogo secreto: bloqueadas até o 3º erro, depois o jogador clica para revelar
function Dicas({ jogo, liberadas, reveladas, onRevelar }: DicasProps) {
  // Vetor com as dicas do jogo secreto
  const dicas = [
    { rotulo: 'Ano de lançamento', valor: String(jogo.ano) },
    { rotulo: 'Onde lançou', valor: jogo.plataformas },
    { rotulo: 'Empresa dona', valor: jogo.empresa },
    { rotulo: 'Comentário Steam', valor: jogo.comentario },
  ]

  return (
    <>
      <h2 className="titulo-secao">Dicas</h2>
      <ul className="dicas">
        {dicas.map((dica) => {
          // Dica já revelada: mostra o valor
          if (reveladas.includes(dica.rotulo)) {
            return (
              <li key={dica.rotulo} className="dica dica-revelada">
                <span className="dica-rotulo">{dica.rotulo}</span>
                <span className="dica-valor">{dica.valor}</span>
              </li>
            )
          }

          // Dica liberada: vira um botão para revelar
          if (liberadas) {
            return (
              <li key={dica.rotulo}>
                <button
                  type="button"
                  className="dica dica-revelar"
                  onClick={() => onRevelar(dica.rotulo)}
                >
                  {dica.rotulo} <br /> clique para revelar
                </button>
              </li>
            )
          }

          // Dica ainda bloqueada
          return (
            <li key={dica.rotulo} className="dica">
              {dica.rotulo} <br /> (bloqueada)
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default Dicas
