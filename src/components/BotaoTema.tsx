type BotaoTemaProps = {
  temaEscuro: boolean
  onTrocarTema: () => void
}

// Botão que alterna entre o tema claro e o escuro
function BotaoTema({ temaEscuro, onTrocarTema }: BotaoTemaProps) {
  return (
    <button type="button" className="botao botao-tema" onClick={onTrocarTema}>
      {temaEscuro ? 'light mode' : 'dark mode'}
    </button>
  )
}

export default BotaoTema
