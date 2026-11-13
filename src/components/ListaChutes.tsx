import type { Jogo } from '../types'

type ListaChutesProps = {
  chutes: Jogo[]
  jogoSecreto: Jogo
}

// Histórico de chutes: o mais recente aparece primeiro
function ListaChutes({ chutes, jogoSecreto }: ListaChutesProps) {
  return (
    <>
      <h2 className="titulo-secao">Seus chutes</h2>
      {chutes.length === 0 && <p className="sem-chutes">Nenhum chute ainda.</p>}
      <ol className="chutes">
        {chutes.map((chute) => (
          <li
            key={chute.id}
            className={chute.id === jogoSecreto.id ? 'chute chute-certo' : 'chute chute-errado'}
          >
            {chute.nome}
          </li>
        ))}
      </ol>
    </>
  )
}

export default ListaChutes
