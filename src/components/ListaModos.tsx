import type { Modo } from '../types'
import ModoCard from './ModoCard'

type ListaModosProps = {
  modos: Modo[]
  onEscolher: (id: string) => void
}

// Listagem secundária: um ModoCard para cada modo do vetor
function ListaModos({ modos, onEscolher }: ListaModosProps) {
  return (
    <>
      <h2 className="titulo-secao">Escolha o modo</h2>
      <ul className="modos">
        {modos.map((modo) => (
          <ModoCard key={modo.id} modo={modo} onEscolher={onEscolher} />
        ))}
      </ul>
    </>
  )
}

export default ListaModos
