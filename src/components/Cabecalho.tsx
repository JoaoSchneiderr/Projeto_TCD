import type { Modo } from '../types'

type CabecalhoProps = {
  modos: Modo[]
  modoAtivo: string
  onTrocarModo: (id: string) => void
  onVoltarInicio: () => void
}

// Cabeçalho da tela do jogo: nome, link para o início e abas dos modos
function Cabecalho({ modos, modoAtivo, onTrocarModo, onVoltarInicio }: CabecalhoProps) {
  return (
    <header className="cabecalho">
      <div className="cabecalho-conteudo">
        <button type="button" className="logo botao-texto" onClick={onVoltarInicio}>
          Adivinha Game
        </button>

        <button type="button" className="link-inicio botao-texto" onClick={onVoltarInicio}>
          ← início
        </button>

        <nav className="abas">
          {modos.map((modo) => (
            <button
              key={modo.id}
              type="button"
              className={modo.id === modoAtivo ? 'aba aba-ativa' : 'aba'}
              onClick={() => onTrocarModo(modo.id)}
            >
              {modo.nome}
            </button>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Cabecalho
