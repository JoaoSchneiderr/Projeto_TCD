import { useState } from 'react'
import './App.css'
import type { Jogo } from './types'
import { jogos, sortearJogo } from './data/jogos'
import { modos } from './data/modos'
import Apresentacao from './components/Apresentacao'
import ListaModos from './components/ListaModos'
import ComoJogar from './components/ComoJogar'
import Cabecalho from './components/Cabecalho'
import Pista from './components/Pista'
import Dicas from './components/Dicas'
import FormChute from './components/FormChute'
import Acerto from './components/Acerto'
import ListaChutes from './components/ListaChutes'
import GradeJogos from './components/GradeJogos'
import Rodape from './components/Rodape'

function App() {
  // ===== Estado =====
  // Modo escolhido (null = tela inicial)
  const [modoAtivo, setModoAtivo] = useState<string | null>(null)
  // Jogo que o jogador precisa descobrir (sorteado ao abrir a página)
  const [jogoSecreto, setJogoSecreto] = useState<Jogo>(() => sortearJogo(jogos))
  // Jogos já chutados, do mais recente para o mais antigo
  const [chutes, setChutes] = useState<Jogo[]>([])
  // Rótulos das dicas que o jogador já revelou
  const [dicasReveladas, setDicasReveladas] = useState<string[]>([])
  // Tema da página
  const [temaEscuro, setTemaEscuro] = useState(false)

  // ===== Valores calculados a partir do estado =====
  const modo = modos.find((item) => item.id === modoAtivo)
  const acertou = chutes.some((chute) => chute.id === jogoSecreto.id)
  const erros = chutes.length - (acertou ? 1 : 0)
  const dicasLiberadas = erros >= 3

  // ===== Funções que mudam o estado (passadas por props) =====
  function escolherModo(id: string) {
    setModoAtivo(id)
    window.scrollTo(0, 0)
  }

  function voltarInicio() {
    setModoAtivo(null)
  }

  function chutar(jogo: Jogo) {
    const jaChutou = chutes.some((chute) => chute.id === jogo.id)
    if (acertou || jaChutou) {
      return
    }
    setChutes([jogo, ...chutes])
  }

  function revelarDica(rotulo: string) {
    setDicasReveladas([...dicasReveladas, rotulo])
  }

  function jogarDeNovo() {
    setJogoSecreto(sortearJogo(jogos))
    setChutes([])
    setDicasReveladas([])
  }

  function trocarTema() {
    setTemaEscuro(!temaEscuro)
  }

  // ===== Composição da página =====
  return (
    <div className={temaEscuro ? 'pagina tema-escuro' : 'pagina'}>
      <main>
        {/* Sem modo escolhido: mostra a tela inicial */}
        {!modo && (
          <section className="tela-inicial conteudo">
            <Apresentacao />
            <ListaModos modos={modos} onEscolher={escolherModo} />
            <ComoJogar />
          </section>
        )}

        {/* Com modo escolhido: mostra a tela do jogo */}
        {modo && (
          <section className="tela-jogo">
            <Cabecalho
              modos={modos}
              modoAtivo={modo.id}
              onTrocarModo={escolherModo}
              onVoltarInicio={voltarInicio}
            />

            <div className="conteudo jogo">
              <div className="jogo-colunas">
                {/* Coluna da esquerda no desktop: pista e dicas */}
                <div>
                  <Pista modo={modo} jogo={jogoSecreto} erros={erros} acertou={acertou} />
                  {!acertou && (
                    <Dicas
                      jogo={jogoSecreto}
                      liberadas={dicasLiberadas}
                      reveladas={dicasReveladas}
                      onRevelar={revelarDica}
                    />
                  )}
                </div>

                {/* Coluna da direita no desktop: chute e histórico */}
                <div className="area-chute">
                  <p className="tentativas">Tentativas: {chutes.length}</p>
                  {acertou ? (
                    <Acerto jogo={jogoSecreto} onJogarDeNovo={jogarDeNovo} />
                  ) : (
                    <FormChute jogos={jogos} onChutar={chutar} />
                  )}
                  <ListaChutes chutes={chutes} jogoSecreto={jogoSecreto} />
                </div>
              </div>

              <GradeJogos
                jogos={jogos}
                chutes={chutes}
                jogoSecreto={jogoSecreto}
                onChutar={chutar}
              />
            </div>
          </section>
        )}
      </main>

      <Rodape temaEscuro={temaEscuro} onTrocarTema={trocarTema} />
    </div>
  )
}

export default App
