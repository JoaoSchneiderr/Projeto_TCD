import BotaoTema from './BotaoTema'

type RodapeProps = {
  temaEscuro: boolean
  onTrocarTema: () => void
}

// Rodapé: botão de tema e créditos
function Rodape({ temaEscuro, onTrocarTema }: RodapeProps) {
  return (
    <footer className="rodape">
      <BotaoTema temaEscuro={temaEscuro} onTrocarTema={onTrocarTema} />
      <p className="rodape-texto">Adivinha Game · TCD 2026</p>
    </footer>
  )
}

export default Rodape
