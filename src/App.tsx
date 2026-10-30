import './App.css'

function App() {
  return (
    <div className="pagina">
      <main>
        {/* Tela inicial: apresentação, modos e como jogar (sem cabeçalho) */}
        <section id="inicio" className="tela-inicial conteudo">
          <h1 className="titulo-principal">Adivinha Game</h1>
          <p className="subtitulo">
            Descubra o jogo pelas pistas. <br />
            Um jogo novo a cada recarga!
          </p>

          {/* Listagem secundária: modos de jogo */}
          <h2 className="titulo-secao">Escolha o modo</h2>
          <ul className="modos">
            <li className="modo-card">
              <span className="modo-icone">S</span>
              <div className="modo-texto">
                <h3 className="modo-nome">Modo: Sinopse</h3>
                <p className="modo-descricao">Leia a história e descubra o jogo</p>
              </div>
              <a href="#jogo" className="botao modo-botao">
                Jogar
              </a>
            </li>

            <li className="modo-card">
              <span className="modo-icone">C</span>
              <div className="modo-texto">
                <h3 className="modo-nome">Modo: Capa</h3>
                <p className="modo-descricao">A capa começa borrada e vai clareando</p>
              </div>
              <a href="#capa" className="botao modo-botao">
                Jogar
              </a>
            </li>

            <li className="modo-card">
              <span className="modo-icone">M</span>
              <div className="modo-texto">
                <h3 className="modo-nome">Modo: Mapa</h3>
                <p className="modo-descricao">Um pedaço do mapa. Reconhece o lugar?</p>
              </div>
              <a href="#mapa" className="botao modo-botao">
                Jogar
              </a>
            </li>
          </ul>

          <h2 className="titulo-secao">Como jogar</h2>
          <ol className="como-jogar">
            <li className="passo">1. Escolha um modo</li>
            <li className="passo">2. Chute um jogo da grade</li>
            <li className="passo">3. Errou 3 vezes? Libere dicas</li>
          </ol>

          {/* Botão de tema no fim da tela inicial, como no wireframe */}
          <div className="area-tema">
            <button type="button" className="botao botao-tema">
              light mode
            </button>
          </div>
        </section>

        {/* Tela do jogo no modo Sinopse */}
        <section id="jogo" className="tela-jogo">
          {/* Cabeçalho da tela do jogo: nome e abas dos modos */}
          <header className="cabecalho">
            <div className="cabecalho-conteudo">
              <a href="#inicio" className="logo">
                Adivinha Game
              </a>

              <a href="#inicio" className="link-inicio">
                ← início
              </a>

              <nav className="abas">
                <a href="#jogo" className="aba aba-ativa">
                  Sinopse
                </a>
                <a href="#capa" className="aba">
                  Capa
                </a>
                <a href="#mapa" className="aba">
                  Mapa
                </a>
              </nav>
            </div>
          </header>

          <div className="conteudo jogo">
            <div className="jogo-colunas">
              {/* Coluna da esquerda no desktop: pista e dicas */}
              <div>
                <h2 className="titulo-secao">Pista · modo Sinopse</h2>
                <article className="pista">
                  <p>
                    "Três criminosos muito diferentes planejam golpes em uma cidade
                    ensolarada inspirada em Los Angeles..."
                  </p>
                  <div className="linha-escondida"></div>
                  <div className="linha-escondida"></div>
                  <div className="linha-escondida linha-curta"></div>
                  <p className="trecho-escondido">
                    <span className="bloco-escondido"></span>
                    <span className="bloco-escondido"></span>
                    (trecho escondido)
                  </p>
                </article>

                <h2 className="titulo-secao">Dicas</h2>
                <ul className="dicas">
                  <li className="dica">
                    Ano de lançamento <br /> (bloqueada)
                  </li>
                  <li className="dica">
                    Onde lançou <br /> (bloqueada)
                  </li>
                  <li className="dica">
                    Empresa dona <br /> (bloqueada)
                  </li>
                  <li className="dica">
                    Comentário Steam <br /> (bloqueada)
                  </li>
                </ul>
              </div>

              {/* Coluna da direita no desktop: chute e histórico */}
              <div className="area-chute">
                <p className="tentativas">Tentativas: 2</p>
                <form className="form-chute">
                  <input
                    type="text"
                    placeholder="Digite o nome do jogo..."
                    aria-label="Nome do jogo"
                    className="campo"
                  />
                  <button type="button" className="botao">
                    Chutar
                  </button>
                </form>

                {/* Sugestões que aparecem enquanto digita */}
                <ul className="sugestoes">
                  <li>Skyrim</li>
                  <li>Sonic</li>
                  <li>Stardew Valley</li>
                </ul>

                <h2 className="titulo-secao">Seus chutes</h2>
                <ol className="chutes">
                  <li className="chute chute-errado">Minecraft</li>
                  <li className="chute chute-errado">Skyrim</li>
                </ol>
              </div>
            </div>

            {/* Listagem principal: grade de jogos */}
            <h2 className="titulo-secao">Jogos · clique no card para chutar</h2>
            <ul className="jogos">
              <li className="jogo-card jogo-card-errado">
                <h3 className="jogo-nome">
                  Minecraft
                </h3>
                <p className="jogo-genero">Sandbox</p>
                <p className="jogo-nota">nota 93 · L</p>
              </li>

              <li className="jogo-card jogo-card-errado">
                <h3 className="jogo-nome">
                  Skyrim
                </h3>
                <p className="jogo-genero">RPG</p>
                <p className="jogo-nota">nota 94 · 18+</p>
              </li>

              <li className="jogo-card">
                <h3 className="jogo-nome">
                  Hollow Knight
                </h3>
                <p className="jogo-genero">Metroidvania</p>
                <p className="jogo-nota">nota 87 · 10+</p>
              </li>

              <li className="jogo-card">
                <h3 className="jogo-nome">
                  Elden Ring
                </h3>
                <p className="jogo-genero">Soulslike</p>
                <p className="jogo-nota">nota 96 · 16+</p>
              </li>

              <li className="jogo-card">
                <h3 className="jogo-nome">
                  Sonic
                </h3>
                <p className="jogo-genero">Plataforma</p>
                <p className="jogo-nota">nota 86 · L</p>
              </li>

              <li className="jogo-card">
                <h3 className="jogo-nome">
                  The Witcher 3
                </h3>
                <p className="jogo-genero">RPG</p>
                <p className="jogo-nota">nota 93 · 18+</p>
              </li>

              <li className="jogo-card">
                <h3 className="jogo-nome">
                  GTA V
                </h3>
                <p className="jogo-genero">Ação</p>
                <p className="jogo-nota">nota 97 · 18+</p>
              </li>

              <li className="jogo-card">
                <h3 className="jogo-nome">
                  Stardew Valley
                </h3>
                <p className="jogo-genero">Simulação</p>
                <p className="jogo-nota">nota 89 · L</p>
              </li>

              <li className="jogo-card">
                <h3 className="jogo-nome">
                  Celeste
                </h3>
                <p className="jogo-genero">Plataforma</p>
                <p className="jogo-nota">nota 92 · 10+</p>
              </li>

              <li className="jogo-card">
                <h3 className="jogo-nome">
                  Hades
                </h3>
                <p className="jogo-genero">Roguelike</p>
                <p className="jogo-nota">nota 93 · 16+</p>
              </li>
            </ul>
          </div>
        </section>

        {/* Tela do jogo no modo Capa (jogador acertou) */}
        <section id="capa" className="tela-jogo">
          {/* Cabeçalho da tela do jogo: nome e abas dos modos */}
          <header className="cabecalho">
            <div className="cabecalho-conteudo">
              <a href="#inicio" className="logo">
                Adivinha Game
              </a>

              <a href="#inicio" className="link-inicio">
                ← início
              </a>

              <nav className="abas">
                <a href="#jogo" className="aba">
                  Sinopse
                </a>
                <a href="#capa" className="aba aba-ativa">
                  Capa
                </a>
                <a href="#mapa" className="aba">
                  Mapa
                </a>
              </nav>
            </div>
          </header>

          <div className="conteudo jogo">
            <div className="jogo-colunas">
              {/* Coluna da esquerda no desktop: pista */}
              <div>
                <h2 className="titulo-secao">Pista · modo Capa</h2>
                <figure className="imagem-pista">
                  <figcaption className="imagem-legenda">capa (agora sem blur)</figcaption>
                </figure>
              </div>

              {/* Coluna da direita no desktop: resultado e histórico */}
              <div className="area-chute">
                <p className="tentativas">Tentativas: 2</p>
                <article className="acerto">
                  <h3 className="acerto-titulo">Você acertou!</h3>
                  <div className="acerto-conteudo">
                    <div className="acerto-capa">capa</div>
                    <div>
                      <p className="acerto-nome">Hollow Knight</p>
                      <p className="acerto-detalhe">2017 · PC, Switch</p>
                      <p className="acerto-detalhe">Team Cherry</p>
                    </div>
                  </div>
                  <button type="button" className="botao acerto-botao">
                    Jogar de novo
                  </button>
                </article>

                <h2 className="titulo-secao">Seus chutes</h2>
                <ol className="chutes">
                  <li className="chute chute-certo">Hollow Knight</li>
                  <li className="chute chute-errado">Elden Ring</li>
                </ol>
              </div>
            </div>

            {/* Listagem principal: grade de jogos */}
            <h2 className="titulo-secao">Jogos · clique no card para chutar</h2>
            <ul className="jogos">
              <li className="jogo-card">
                <h3 className="jogo-nome">Minecraft</h3>
                <p className="jogo-genero">Sandbox</p>
                <p className="jogo-nota">nota 93 · L</p>
              </li>

              <li className="jogo-card">
                <h3 className="jogo-nome">Skyrim</h3>
                <p className="jogo-genero">RPG</p>
                <p className="jogo-nota">nota 94 · 18+</p>
              </li>

              <li className="jogo-card jogo-card-certo">
                <h3 className="jogo-nome">Hollow Knight</h3>
                <p className="jogo-genero">Metroidvania</p>
                <p className="jogo-nota">nota 87 · 10+</p>
              </li>

              <li className="jogo-card jogo-card-errado">
                <h3 className="jogo-nome">Elden Ring</h3>
                <p className="jogo-genero">Soulslike</p>
                <p className="jogo-nota">nota 96 · 16+</p>
              </li>

              <li className="jogo-card">
                <h3 className="jogo-nome">Sonic</h3>
                <p className="jogo-genero">Plataforma</p>
                <p className="jogo-nota">nota 86 · L</p>
              </li>

              <li className="jogo-card">
                <h3 className="jogo-nome">The Witcher 3</h3>
                <p className="jogo-genero">RPG</p>
                <p className="jogo-nota">nota 93 · 18+</p>
              </li>

              <li className="jogo-card">
                <h3 className="jogo-nome">GTA V</h3>
                <p className="jogo-genero">Ação</p>
                <p className="jogo-nota">nota 97 · 18+</p>
              </li>

              <li className="jogo-card">
                <h3 className="jogo-nome">Stardew Valley</h3>
                <p className="jogo-genero">Simulação</p>
                <p className="jogo-nota">nota 89 · L</p>
              </li>

              <li className="jogo-card">
                <h3 className="jogo-nome">Celeste</h3>
                <p className="jogo-genero">Plataforma</p>
                <p className="jogo-nota">nota 92 · 10+</p>
              </li>

              <li className="jogo-card">
                <h3 className="jogo-nome">Hades</h3>
                <p className="jogo-genero">Roguelike</p>
                <p className="jogo-nota">nota 93 · 16+</p>
              </li>
            </ul>
          </div>
        </section>

        {/* Tela do jogo no modo Mapa (duas dicas reveladas) */}
        <section id="mapa" className="tela-jogo">
          {/* Cabeçalho da tela do jogo: nome e abas dos modos */}
          <header className="cabecalho">
            <div className="cabecalho-conteudo">
              <a href="#inicio" className="logo">
                Adivinha Game
              </a>

              <a href="#inicio" className="link-inicio">
                ← início
              </a>

              <nav className="abas">
                <a href="#jogo" className="aba">
                  Sinopse
                </a>
                <a href="#capa" className="aba">
                  Capa
                </a>
                <a href="#mapa" className="aba aba-ativa">
                  Mapa
                </a>
              </nav>
            </div>
          </header>

          <div className="conteudo jogo">
            <div className="jogo-colunas">
              {/* Coluna da esquerda no desktop: pista e dicas */}
              <div>
                <h2 className="titulo-secao">Pista · modo Mapa</h2>
                <figure className="imagem-pista imagem-mapa">
                  <figcaption className="imagem-legenda">recorte do mapa (zoom)</figcaption>
                  <span className="selo-zoom">zoom 4x</span>
                </figure>

                <h2 className="titulo-secao">Dicas</h2>
                <ul className="dicas">
                  <li className="dica dica-revelada">
                    <span className="dica-rotulo">Ano de lançamento</span>
                    <span className="dica-valor">2016</span>
                  </li>
                  <li className="dica dica-revelar">
                    Onde lançou <br /> clique para revelar
                  </li>
                  <li className="dica dica-revelada">
                    <span className="dica-rotulo">Empresa dona</span>
                    <span className="dica-valor">ConcernedApe</span>
                  </li>
                  <li className="dica dica-revelar">
                    Comentário Steam <br /> clique para revelar
                  </li>
                </ul>
              </div>

              {/* Coluna da direita no desktop: chute e histórico */}
              <div className="area-chute">
                <p className="tentativas">Tentativas: 4</p>
                <form className="form-chute">
                  <input
                    type="text"
                    placeholder="Digite o nome do jogo..."
                    aria-label="Nome do jogo"
                    className="campo"
                  />
                  <button type="button" className="botao">
                    Chutar
                  </button>
                </form>

                <h2 className="titulo-secao">Seus chutes</h2>
                <ol className="chutes">
                  <li className="chute chute-errado">Sonic</li>
                  <li className="chute chute-errado">The Witcher 3</li>
                  <li className="chute chute-errado">Minecraft</li>
                  <li className="chute chute-errado">GTA V</li>
                </ol>
              </div>
            </div>

            {/* Listagem principal: grade de jogos */}
            <h2 className="titulo-secao">Jogos · clique no card para chutar</h2>
            <ul className="jogos">
              <li className="jogo-card jogo-card-errado">
                <h3 className="jogo-nome">Minecraft</h3>
                <p className="jogo-genero">Sandbox</p>
                <p className="jogo-nota">nota 93 · L</p>
              </li>

              <li className="jogo-card">
                <h3 className="jogo-nome">Skyrim</h3>
                <p className="jogo-genero">RPG</p>
                <p className="jogo-nota">nota 94 · 18+</p>
              </li>

              <li className="jogo-card">
                <h3 className="jogo-nome">Hollow Knight</h3>
                <p className="jogo-genero">Metroidvania</p>
                <p className="jogo-nota">nota 87 · 10+</p>
              </li>

              <li className="jogo-card">
                <h3 className="jogo-nome">Elden Ring</h3>
                <p className="jogo-genero">Soulslike</p>
                <p className="jogo-nota">nota 96 · 16+</p>
              </li>

              <li className="jogo-card jogo-card-errado">
                <h3 className="jogo-nome">Sonic</h3>
                <p className="jogo-genero">Plataforma</p>
                <p className="jogo-nota">nota 86 · L</p>
              </li>

              <li className="jogo-card jogo-card-errado">
                <h3 className="jogo-nome">The Witcher 3</h3>
                <p className="jogo-genero">RPG</p>
                <p className="jogo-nota">nota 93 · 18+</p>
              </li>

              <li className="jogo-card jogo-card-errado">
                <h3 className="jogo-nome">GTA V</h3>
                <p className="jogo-genero">Ação</p>
                <p className="jogo-nota">nota 97 · 18+</p>
              </li>

              <li className="jogo-card">
                <h3 className="jogo-nome">Stardew Valley</h3>
                <p className="jogo-genero">Simulação</p>
                <p className="jogo-nota">nota 89 · L</p>
              </li>

              <li className="jogo-card">
                <h3 className="jogo-nome">Celeste</h3>
                <p className="jogo-genero">Plataforma</p>
                <p className="jogo-nota">nota 92 · 10+</p>
              </li>

              <li className="jogo-card">
                <h3 className="jogo-nome">Hades</h3>
                <p className="jogo-genero">Roguelike</p>
                <p className="jogo-nota">nota 93 · 16+</p>
              </li>
            </ul>
          </div>
        </section>
      </main>

      {/* Rodapé: botão de tema e créditos */}
      <footer className="rodape">
        <button type="button" className="botao botao-tema">
          light mode
        </button>
        <p className="rodape-texto">Adivinha Game · TCD 2026</p>
      </footer>
    </div>
  )
}

export default App
