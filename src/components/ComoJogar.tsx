// Passo a passo de como jogar (texto fixo, não recebe props)
function ComoJogar() {
  return (
    <>
      <h2 className="titulo-secao">Como jogar</h2>
      <ol className="como-jogar">
        <li className="passo">1. Escolha um modo</li>
        <li className="passo">2. Chute um jogo da grade</li>
        <li className="passo">3. Errou 3 vezes? Libere dicas</li>
      </ol>
    </>
  )
}

export default ComoJogar
