// Posições dos cards de esqueleto (um para cada jogo que vai chegar)
const espacos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Estado de carregando: aviso e cards cinzas no lugar da grade de jogos
function Carregando() {
  return (
    <div className="conteudo carregando" role="status">
      <p className="carregando-texto">Carregando jogos...</p>
      <ul className="jogos">
        {espacos.map((espaco) => (
          <li key={espaco} className="esqueleto-card">
            <span className="esqueleto-linha"></span>
            <span className="esqueleto-linha esqueleto-linha-curta"></span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Carregando
